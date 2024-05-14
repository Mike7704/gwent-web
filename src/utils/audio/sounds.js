import { Howl } from "howler";

/*
const sounds = [
  "/sounds/mouseHover.mp3",
  "/sounds/startGame.mp3",
  "/sounds/coinFlip.mp3",
  "/sounds/turnPlayer.mp3",
  "/sounds/turnOpponent.mp3",
  "/sounds/roundWin.mp3",
  "/sounds/roundLoss.mp3",
  "/sounds/roundDraw.mp3",
  "/sounds/gameWin.mp3",
  "/sounds/gameLoss.mp3",
  "/sounds/openDeck.mp3",
  "/sounds/redrawCardsStart.mp3",
  "/sounds/redrawCardsEnd.mp3",
  "/sounds/redrawCard.mp3",
  "/sounds/addCard.mp3",
  "/sounds/factionAbility.mp3",
  "/sounds/cardBond.mp3",
  "/sounds/cardDecoy.mp3",
  "/sounds/cardMedic.mp3",
  "/sounds/cardHero.mp3",
  "/sounds/cardHorn.mp3",
  "/sounds/cardMelee.mp3",
  "/sounds/cardMorale.mp3",
  "/sounds/cardRanged.mp3",
  "/sounds/cardScorch.mp3",
  "/sounds/cardSiege.mp3",
  "/sounds/cardSpy.mp3",
  "/sounds/cardSummon.mp3",
  "/sounds/weatherClear.mp3",
  "/sounds/weatherFrost.mp3",
  "/sounds/weatherFog.mp3",
  "/sounds/weatherRain.mp3",
  "/sounds/weatherStorm.mp3",
  "/sounds/challengeComplete.mp3",
];
*/

const mouseHover = new Howl({
  src: ["/sounds/mouseHover.mp3"],
  volume: 0.3,
});

const startGame = new Howl({
  src: ["/sounds/startGame.mp3"],
});

const coinFlip = new Howl({
  src: ["/sounds/coinFlip.mp3"],
});

const turnPlayer = new Howl({
  src: ["/sounds/turnPlayer.mp3"],
});

const turnOpponent = new Howl({
  src: ["/sounds/turnOpponent.mp3"],
});

const roundWin = new Howl({
  src: ["/sounds/roundWin.mp3"],
});

const roundLoss = new Howl({
  src: ["/sounds/roundLoss.mp3"],
});

const roundDraw = new Howl({
  src: ["/sounds/roundDraw.mp3"],
});

const gameWin = new Howl({
  src: ["/sounds/gameWin.mp3"],
});

const gameLoss = new Howl({
  src: ["/sounds/gameLoss.mp3"],
});

const openDeck = new Howl({
  src: ["/sounds/openDeck.mp3"],
  volume: 0.5,
});

const redrawCardsStart = new Howl({
  src: ["/sounds/redrawCardsStart.mp3"],
});

const redrawCardsEnd = new Howl({
  src: ["/sounds/redrawCardsEnd.mp3"],
});

const redrawCard = new Howl({
  src: ["/sounds/redrawCard.mp3"],
});

const addCard = new Howl({
  src: ["/sounds/addCard.mp3"],
});

const factionAbility = new Howl({
  src: ["/sounds/factionAbility.mp3"],
});

const cardBond = new Howl({
  src: ["/sounds/cardBond.mp3"],
});

const cardDecoy = new Howl({
  src: ["/sounds/cardDecoy.mp3"],
});

const cardMedic = new Howl({
  src: ["/sounds/cardMedic.mp3"],
});

const cardHero = new Howl({
  src: ["/sounds/cardHero.mp3"],
});

const cardHorn = new Howl({
  src: ["/sounds/cardHorn.mp3"],
});

const cardMelee = new Howl({
  src: ["/sounds/cardMelee.mp3"],
});

const cardMorale = new Howl({
  src: ["/sounds/cardMorale.mp3"],
});

const cardRanged = new Howl({
  src: ["/sounds/cardRanged.mp3"],
});

const cardScorch = new Howl({
  src: ["/sounds/cardScorch.mp3"],
});

const cardSiege = new Howl({
  src: ["/sounds/cardSiege.mp3"],
});

const cardSpy = new Howl({
  src: ["/sounds/cardSpy.mp3"],
});

const cardSummon = new Howl({
  src: ["/sounds/cardSummon.mp3"],
});

const weatherClear = new Howl({
  src: ["/sounds/weatherClear.mp3"],
});

const weatherFrost = new Howl({
  src: ["/sounds/weatherFrost.mp3"],
});

const weatherFog = new Howl({
  src: ["/sounds/weatherFog.mp3"],
});

const weatherRain = new Howl({
  src: ["/sounds/weatherRain.mp3"],
});

const weatherStorm = new Howl({
  src: ["/sounds/weatherStorm.mp3"],
});

const challengeComplete = new Howl({
  src: ["/sounds/challengeComplete.mp3"],
});

const sounds = {
  mouseHover,
  startGame,
  coinFlip,
  turnPlayer,
  turnOpponent,
  roundWin,
  roundLoss,
  roundDraw,
  gameWin,
  gameLoss,
  openDeck,
  redrawCardsStart,
  redrawCardsEnd,
  redrawCard,
  addCard,
  factionAbility,
  cardBond,
  cardDecoy,
  cardMedic,
  cardHero,
  cardHorn,
  cardMelee,
  cardMorale,
  cardRanged,
  cardScorch,
  cardSiege,
  cardSpy,
  cardSummon,
  weatherClear,
  weatherFrost,
  weatherFog,
  weatherRain,
  weatherStorm,
  challengeComplete,
};

export default sounds;
