import { Faction } from "@/utils/enums.js";

export function sortDeck(deck) {
  return deck.slice().sort(compareCards);
}

function compareCards(card1, card2) {
  if (isSpecialCard(card1) && isSpecialCard(card2)) {
    return compareSpecialCards(card1, card2);
  }

  // If only one of the cards is special, place it after non-special cards
  if (isSpecialCard(card1)) return 1;
  if (isSpecialCard(card2)) return -1;

  // If both cards are not special, sort by strength
  if (hasStrength(card1) && hasStrength(card2)) {
    return card2.strength - card1.strength;
  }

  // If one of the cards has no strength, place it after cards with strength
  if (!hasStrength(card1)) return 1;
  if (!hasStrength(card2)) return -1;

  // If neither card has strength, sort by name
  return card1.name.localeCompare(card2.name);
}

function isSpecialCard(card) {
  return card.type === Faction.SPECIAL;
}

function compareSpecialCards(card1, card2) {
  // Special cards with faction "special" are placed last
  if (card1.faction === Faction.SPECIAL && card2.faction !== Faction.SPECIAL) return 1;
  if (card1.faction !== Faction.SPECIAL && card2.faction === Faction.SPECIAL) return -1;
  return card1.name.localeCompare(card2.name);
}

function hasStrength(card) {
  return card.strength !== undefined;
}
