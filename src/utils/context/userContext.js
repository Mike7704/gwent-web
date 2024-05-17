"use client";
import { createContext, useContext, useState } from "react";

// Create the UserContext
const UserContext = createContext();

// Create a custom hook to access the UserContext
export const useUser = () => useContext(UserContext);

// UserProvider component to wrap around the application
export const UserProvider = ({ children }) => {
  // State for selected deck
  const [userDeck, setUserDeck] = useState([]);

  // State for user challenges
  const [userChallenges, setUserChallenges] = useState(/* Initial user challenges */);

  // State for user stats
  const [userStats, setUserStats] = useState({ wins: 0, draws: 0, losses: 0, highestRoundScore: 0, coin: 0 });

  // State for user settings
  const [userSettings, setUserSettings] = useState({
    useRandomPlayerDeck: false,
    useRandomNPCDeck: true,
    randomDeckSize: 25,
    startingDeckSize: 12,
    spyDrawAmount: 1,
    useLeaderCards: true,
    useFactionAbility: true,
    useVideos: false,
  });

  return (
    <UserContext.Provider
      value={{
        userSettings,
        setUserSettings,
        userDeck,
        setUserDeck,
        userChallenges,
        setUserChallenges,
        userStats,
        setUserStats,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
