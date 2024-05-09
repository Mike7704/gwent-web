import BackgroundVideo from "@/components/BackgroundVideo";
import NavButton from "@/components/NavButton";
import Card from "@/components/Card";
import neutralCardsData from "@/utils/decks/neutral.json";

export default function DeckMenu() {
  return (
    <main className="page-container">
      <div className="main-menu">
        <h1>Deck Menu</h1>
        <h2>Neutral Cards</h2>
        <div className="card-container">
          {neutralCardsData.cards.map((card) => (
            <Card key={card.id} card={card} scale={0.8} />
          ))}
        </div>
        <NavButton href="/">Back</NavButton>
      </div>
    </main>
  );
}
