"use client";
import { useState, useMemo } from "react";
import BackgroundVideo from "@/components/menu/BackgroundVideo";
import NavButton from "@/components/menu/NavButton";
import Card from "@/components/Card";
import InspectCard from "@/components/InspectCard";
import { Faction } from "@/utils/enums.js";
import { sortDeck } from "@/utils/sort.js";
import { getDeck } from "@/utils/decks/getDeck.js";
import { getCard } from "@/utils/decks/getCard.js";

export default function DeckMenu() {
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
      console.log(card.name);
    } else if (e.type === "contextmenu") {
      setCardToInspect(getCard(card.id));
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
        <div className="card-container">
          {currentFactionDeck.map((card) => (
            <Card key={card.id} card={card} scale={0.55} handleClick={handleClick} />
          ))}
        </div>
        <NavButton href="/">Back</NavButton>
        {cardToInspect && <InspectCard card={cardToInspect} />}
      </div>
    </main>
  );
}
