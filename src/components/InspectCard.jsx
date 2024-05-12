"use client";
import { useState, useEffect } from "react";
import { CardAbility } from "@/utils/enums";
import * as Dialog from "@radix-ui/react-dialog";
import Card from "@/components/Card";
import { getCard } from "@/utils/decks/getCard.js";
import inspectStyle from "@/styles/inspectCard.module.css";

export default function InspectCard({ card }) {
  const [isVisible, setIsVisible] = useState(false);

  // Make visible when inspect card changes
  useEffect(() => {
    setIsVisible(true);
  }, [card]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <Dialog.Root open={isVisible} onOpenChange={setIsVisible}>
      <Dialog.Trigger />
      <Dialog.Portal>
        <Dialog.Overlay className={inspectStyle.overlay} onClick={handleClose} onContextMenu={handleClose}>
          <Dialog.Content className={inspectStyle.container}>
            <div className={inspectStyle.container}>
              <div className={inspectStyle.card}>
                <Card card={card} scale={1} />
              </div>
              <div className={inspectStyle.info}>
                <h2>{card.ability}</h2>
                <p>{getAbilityDescription(card.ability)}</p>
                {card.target && (
                  <>
                    <p>Targets:</p>
                    <div className={inspectStyle.targets}>
                      {card.target.map((target) => (
                        <Card key={target.id} card={getCard(target.id)} scale={0.55} />
                      ))}
                    </div>
                  </>
                )}
                <p>Click anywhere to close.</p>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
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
      return "No ability";
  }
}
