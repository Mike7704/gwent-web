import BackgroundVideo from "@/components/menu/BackgroundVideo";
import NavButton from "@/components/menu/NavButton";
import Card from "@/components/Card";
import { Faction } from "@/utils/enums.js";
import { getDeck } from "@/utils/decks/getDeck.js";

export default function DeckMenu() {
  return (
    <main className="page-container">
      <div className="main-menu">
        <h1>Deck Menu</h1>
        <h2>Neutral Cards</h2>
        <div className="card-container">
          {getDeck(Faction.NEUTRAL).cards.map((card) => (
            <Card key={card.id} card={card} scale={0.55} />
          ))}
          {getDeck(Faction.SPECIAL).cards.map((card) => (
            <Card key={card.id} card={card} scale={0.55} />
          ))}
          {getDeck(Faction.NORTHERN_REALMS).cards.map((card) => (
            <Card key={card.id} card={card} scale={0.55} />
          ))}
        </div>
        <NavButton href="/">Back</NavButton>
      </div>
    </main>
  );
}
