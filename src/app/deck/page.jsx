"use client";
import { useState, useEffect, useMemo } from "react";
import BackgroundVideo from "@/components/menu/BackgroundVideo";
import MenuButton from "@/components/menu/MenuButton";
import NavButton from "@/components/menu/NavButton";
import Card from "@/components/card/Card";
import InspectCard from "@/components/card/InspectCard";
import { Faction } from "@/utils/enums.js";
import { usePlayerDeck } from "@/utils/context/playerDeck.js";
import { getDeck } from "@/utils/decks/getDeck.js";
import { getCard } from "@/utils/decks/getCard.js";
import { sortDeck } from "@/utils/decks/sort.js";
import sounds from "@/utils/audio/sounds";
import menuStyle from "@/styles/menus/deck.module.css";

export default function DeckMenu() {
  const { playerDeck, playerDeckAddCard, playerDeckRemoveCard, playerDeckContainsCard } = usePlayerDeck();

  const [cardToInspect, setCardToInspect] = useState(null);
  const [currentFaction, setCurrentFaction] = useState(Faction.NORTHERN_REALMS);

  // Memoize the deck of cards for the current faction to avoid recalculating it on every render
  const currentFactionDeck = useMemo(() => {
    const neutralDecks = [...getDeck(Faction.NEUTRAL).cards, ...getDeck(Faction.SPECIAL).cards];
    return sortDeck([...neutralDecks, ...getDeck(currentFaction).cards]);
  }, [currentFaction]);

  function changeFaction(faction) {
    setCurrentFaction(faction);
  }

  const handleClick = (e, card) => {
    e.preventDefault();
    if (e.type === "click") {
      if (!playerDeckContainsCard(card.id)) {
        //playerDeck.addCard(card);
        playerDeckAddCard(card);
        sounds.addCard.play();
      } else {
        //playerDeck.removeCard(card);
        playerDeckRemoveCard(card.id);
        sounds.redrawCard.play();
      }
    } else if (e.type === "contextmenu") {
      setCardToInspect(getCard(card));
      sounds.openDeck.volume(0.3).play();
    }
  };

  return (
    <main className={menuStyle.background}>
      <div className={`content-container ${menuStyle.container}`}>
        <div className={menuStyle.top_buttons_container}>
          <MenuButton handleClick={() => changeFaction(Faction.NORTHERN_REALMS)}>Northern Realms</MenuButton>
          <MenuButton handleClick={() => changeFaction(Faction.NILFGAARD)}>Nilfgaard</MenuButton>
          <MenuButton handleClick={() => changeFaction(Faction.SCOIATAEL)}>Scoia&apos;tael</MenuButton>
          <MenuButton handleClick={() => changeFaction(Faction.MONSTERS)}>Monsters</MenuButton>
          <MenuButton handleClick={() => changeFaction(Faction.SKELLIGE)}>Skellige</MenuButton>
        </div>
        <div className={menuStyle.card_containers}>
          <div className={menuStyle.card_container}>
            {currentFactionDeck.map((card) => (
              <Card key={card.id} card={card} scale={0.53} handleClick={handleClick} />
            ))}
          </div>
          <div className={menuStyle.card_container}>
            {playerDeck.map((card) => (
              <Card key={card.id} card={card} scale={0.53} handleClick={handleClick} />
            ))}
          </div>
        </div>
        <NavButton href="/">Back</NavButton>
        {cardToInspect && <InspectCard card={cardToInspect} />}
      </div>
    </main>
  );
}
