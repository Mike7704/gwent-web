"use client";
import { useState, useEffect } from "react";
import { CardAbility } from "@/utils/enums";
import * as Dialog from "@radix-ui/react-dialog";
import Card from "@/components/card/Card";
import { getCard } from "@/utils/decks/getCard.js";
import inspectStyle from "@/styles/menus/inspectCard.module.css";

export default function InspectCard({ card }) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentCard, setCurrentCard] = useState(card);

  // Make visible when inspect card changes
  useEffect(() => {
    setIsVisible(true);
    setCurrentCard(card);
  }, [card]);

  const handleClose = () => {
    setIsVisible(false);
  };

  // Inspect target card when clicked
  const handleClick = (e, targetCard) => {
    e.preventDefault();
    e.stopPropagation(); // Don't close dialog window
    setCurrentCard(targetCard);
  };

  return (
    <Dialog.Root open={isVisible} onOpenChange={setIsVisible}>
      <Dialog.Trigger />
      <Dialog.Portal>
        <Dialog.Overlay className={inspectStyle.overlay} onClick={handleClose} onContextMenu={handleClose}>
          <Dialog.Content className={inspectStyle.container}>
            <div className={inspectStyle.card}>
              <Card card={currentCard} scale={1} />
            </div>
            <div className={`gwent-gold-text ${inspectStyle.text} ${inspectStyle.ability_container}`}>
              <h2>{getAbilityName(currentCard)}</h2>
              <p>{getAbilityDescription(currentCard.ability)}</p>
            </div>
            <div className={inspectStyle.target_container}>
              {currentCard.target && (
                <>
                  <div className={inspectStyle.targets}>
                    {currentCard.target.map((target) => (
                      <Card key={target.id} card={getCard(target)} scale={0.5} handleClick={handleClick} />
                    ))}
                  </div>
                  <h2 className={`gwent-gold-text ${inspectStyle.text}`}>Targets</h2>
                </>
              )}
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function getAbilityName(card) {
  switch (card.ability) {
    case CardAbility.AVENGER:
      return "Avenger";
    case CardAbility.MORPH:
      return "Morph";
    case CardAbility.MARDROEME:
      return "Mardroeme";
    case CardAbility.MEDIC:
      return "Medic";
    case CardAbility.MORALE:
      return "Morale Boost";
    case CardAbility.MUSTER:
      return "Muster";
    case CardAbility.SPY:
      return "Spy";
    case CardAbility.BOND:
      return "Tight Bond";
    case CardAbility.HORN:
      return "Commander's Horn";
    case CardAbility.DECOY:
      return "Decoy";
    case CardAbility.SCORCH:
      return "Scorch";
    case CardAbility.SCORCH_ROW:
      return "Scorch Row: " + card.range;
    case CardAbility.DRAW_ENEMY_DISCARD:
      return "Draw From Opponent";

    case CardAbility.CLEAR:
      return "Clear Weather";
    case CardAbility.FROST:
      return "Biting Frost";
    case CardAbility.FOG:
      return "Impenetrable Fog";
    case CardAbility.RAIN:
      return "Torrential Rain";
    case CardAbility.STORM:
    case CardAbility.NATURE:
    case CardAbility.WHITEFROST:
      return card.name;
    default:
      return "";
  }
}

function getAbilityDescription(ability) {
  switch (ability) {
    case CardAbility.AVENGER:
      return "When this card is removed from the battlefield, it summons a powerful new unit card to take its place.";
    case CardAbility.MORPH:
      return "Transforms when a Mardroeme card is on its row.";
    case CardAbility.MARDROEME:
      return "Triggers transformations of all Morph cards on the same row.";
    case CardAbility.MEDIC:
      return "Choose one card from your discard pile to play instantly. This excludes heroes and special cards.";
    case CardAbility.MORALE:
      return "Adds +1 strength to every card in it's row, excluding itself.";
    case CardAbility.MUSTER:
      return "Finds any cards with the same name in your deck (unless specified) and plays them instantly.";
    case CardAbility.SPY:
      return "Place on an opponents battlefield (counts towards their total strength), then draw cards from your own deck.";
    case CardAbility.BOND:
      return "Doubles the strength of both cards when placed next to a unit of the same name.";
    case CardAbility.HORN:
      return "Doubles the strength of all units in a given row (limit one per row).";
    case CardAbility.DECOY:
      return "Swap with a card on the battlefield to return it to your hand - this removes the card's strength from your score.";
    case CardAbility.SCORCH:
      return "Destroy the highest strength card, or cards if multiple similar point scores exist, in play. This destroys your cards as well.";
    case CardAbility.SCORCH_ROW:
      return "Destroy your enemy's strongest unit(s) if the combined strength of all their units is 10 or more.";
    case CardAbility.DRAW_ENEMY_DISCARD:
      return "Draw a random card from your opponent's discard pile.";

    case CardAbility.CLEAR:
      return "Clears all weather effects currently in effect on the battlefield.";
    case CardAbility.FROST:
      return "Reduces the Strength of all Close Units to 1. Ineffective on Hero cards.";
    case CardAbility.FOG:
      return "Reduces the Strength of all Ranged Units to 1. Ineffective on Hero cards.";
    case CardAbility.RAIN:
      return "Reduces the Strength of all Siege Units to 1. Ineffective on Hero cards";
    case CardAbility.STORM:
      return "Reduces the Strength of all Ranged and Siege Units to 1. Ineffective on Hero cards.";
    case CardAbility.NATURE:
      return "Reduces the Strength of all Melee and Siege Units to 1. Ineffective on Hero cards.";
    case CardAbility.WHITEFROST:
      return "Reduces the Strength of all Melee and Ranged Units to 1. Ineffective on Hero cards.";
    default:
      return "";
  }
}
