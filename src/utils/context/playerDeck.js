"use client";
import { createContext, useContext, useState } from "react";

const PlayerDeckContext = createContext();

export const PlayerDeckProvider = ({ children }) => {
  const [playerDeck, setPlayerDeck] = useState([]);

  const playerDeckAddCard = (card) => {
    setPlayerDeck((prevDeck) => [...prevDeck, card]);
  };

  const playerDeckRemoveCard = (cardId) => {
    setPlayerDeck((prevDeck) => prevDeck.filter((card) => card.id !== cardId));
  };

  const playerDeckContainsCard = (cardId) => {
    return playerDeck.some((card) => card.id === cardId);
  };

  return (
    <PlayerDeckContext.Provider value={{ playerDeck, playerDeckAddCard, playerDeckRemoveCard, playerDeckContainsCard }}>
      {children}
    </PlayerDeckContext.Provider>
  );
};

export const usePlayerDeck = () => useContext(PlayerDeckContext);
