"use client";
import { useState, useEffect, useMemo } from "react";
import BackgroundVideo from "@/components/menu/BackgroundVideo";
import MenuButton from "@/components/menu/MenuButton";
import NavButton from "@/components/menu/NavButton";
import Card from "@/components/card/Card";
import InspectCard from "@/components/menu/InspectCard";
import { Faction } from "@/utils/enums.js";
import { useUser } from "@/utils/context/userContext.js";
import { getDeck } from "@/utils/decks/getDeck.js";
import { getCard } from "@/utils/decks/getCard.js";
import { sortDeck } from "@/utils/decks/sort.js";
import sounds from "@/utils/audio/sounds";
import menuStyle from "@/styles/menus/deck.module.css";

export default function DeckMenu() {
  const { userDeck, setUserDeck } = useUser();

  const [cardToInspect, setCardToInspect] = useState(null);
  const [currentFaction, setCurrentFaction] = useState(Faction.NORTHERN_REALMS);

  // Memoize the deck of cards for the current faction to avoid recalculating it on every render
  const currentFactionDeck = useMemo(() => {
    const neutralDecks = [...getDeck(Faction.NEUTRAL).cards, ...getDeck(Faction.SPECIAL).cards];
    return sortDeck([...neutralDecks, ...getDeck(currentFaction).cards]);
  }, [currentFaction]);

  const handleCardClick = (e, card) => {
    e.preventDefault();
    if (e.type === "click") {
      if (!userDeckContainsCard(card)) {
        addUserCard(card);
      } else {
        removeUserCard(card);
      }
    } else if (e.type === "contextmenu") {
      setCardToInspect(getCard(card));
      sounds.openDeck.volume(0.3).play();
    }
  };

  const addUserCard = (card) => {
    setUserDeck((prevDeck) => [...prevDeck, card]);
    sounds.addCard.play();
  };

  const removeUserCard = (card) => {
    setUserDeck((prevDeck) => prevDeck.filter((c) => c.id !== card.id));
    sounds.redrawCard.play();
  };

  const userDeckContainsCard = (card) => {
    return userDeck.some((c) => c.id === card.id);
  };

  return (
    <main className={menuStyle.background}>
      <div className={`content-container ${menuStyle.container}`}>
        <div className={menuStyle.top_buttons_container}>
          <MenuButton handleClick={() => setCurrentFaction(Faction.NORTHERN_REALMS)}>Northern Realms</MenuButton>
          <MenuButton handleClick={() => setCurrentFaction(Faction.NILFGAARD)}>Nilfgaard</MenuButton>
          <MenuButton handleClick={() => setCurrentFaction(Faction.SCOIATAEL)}>Scoia&apos;tael</MenuButton>
          <MenuButton handleClick={() => setCurrentFaction(Faction.MONSTERS)}>Monsters</MenuButton>
          <MenuButton handleClick={() => setCurrentFaction(Faction.SKELLIGE)}>Skellige</MenuButton>
        </div>
        <div className={menuStyle.card_containers}>
          <div className={menuStyle.card_container}>
            {currentFactionDeck.map((card) => (
              <Card key={card.id} card={card} scale={0.5} handleClick={handleCardClick} />
            ))}
          </div>
          <div className={menuStyle.card_container}>
            {userDeck.map((card) => (
              <Card key={card.id} card={card} scale={0.5} handleClick={handleCardClick} />
            ))}
          </div>
        </div>
        <NavButton href="/">Back</NavButton>
        {cardToInspect && <InspectCard card={cardToInspect} />}
      </div>
    </main>
  );
}
