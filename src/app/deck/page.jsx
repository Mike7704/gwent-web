"use client";
import { useState } from "react";
import BackgroundVideo from "@/components/menu/BackgroundVideo";
import NavButton from "@/components/menu/NavButton";
import Card from "@/components/Card";
import InspectCard from "@/components/InspectCard";
import { Faction } from "@/utils/enums.js";
import { getDeck } from "@/utils/decks/getDeck.js";
import { getCard } from "@/utils/decks/getCard.js";

export default function DeckMenu() {
  const [cardToInspect, setCardToInspect] = useState(null);

  const neutralDecks = [...getDeck(Faction.NEUTRAL).cards, ...getDeck(Faction.SPECIAL).cards];
  const currentFactionDeck = [...neutralDecks, ...getDeck(Faction.NORTHERN_REALMS).cards];

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
        <h2>Neutral Cards</h2>
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
