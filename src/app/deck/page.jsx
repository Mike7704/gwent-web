"use client";
import { useState, useEffect, useMemo } from "react";
import BackgroundVideo from "@/components/menu/BackgroundVideo";
import NavButton from "@/components/menu/NavButton";
import Card from "@/components/Card";
import InspectCard from "@/components/InspectCard";
import { Faction } from "@/utils/enums.js";
import { usePlayerDeck } from "@/utils/context/playerDeck.js";
import { getDeck } from "@/utils/decks/getDeck.js";
import { getCard } from "@/utils/decks/getCard.js";
import { sortDeck } from "@/utils/decks/sort.js";
import sounds from "@/utils/audio/sounds";

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
    <main className="page-container">
      <div className="main-menu">
        <h1>Deck Menu</h1>
        <div>
          <button className="menu-button" onClick={() => changeFaction(Faction.NORTHERN_REALMS)}>
            Northern Realms
          </button>
          <button className="menu-button" onClick={() => changeFaction(Faction.NILFGAARD)}>
            Nilfgaard
          </button>
          <button className="menu-button" onClick={() => changeFaction(Faction.SCOIATAEL)}>
            Scoiatael
          </button>
          <button className="menu-button" onClick={() => changeFaction(Faction.MONSTERS)}>
            Monsters
          </button>
          <button className="menu-button" onClick={() => changeFaction(Faction.SKELLIGE)}>
            Skellige
          </button>
        </div>
        <div className="card-containers">
          <div className="card-container">
            {currentFactionDeck.map((card) => (
              <Card key={card.id} card={card} scale={0.53} handleClick={handleClick} />
            ))}
          </div>
          <div className="card-container">
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
