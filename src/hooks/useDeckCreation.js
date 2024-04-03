import useRandomIndex from "./useRandomIndex/js";

const cards = new Map();
cards.set(1, {
  name: "Reshuffle Card",
  image: Reshuffle,
  description: "Sorry you have to start the game again 😿",
});
cards.set(2, {
  name: "Cat Card",
  image: Cat,
  description: "The kitty Says hi to you 😺",
});
cards.set(3, {
  name: "defuse card",
  image: defuse,
  description: "congrats you are safe against the bomb 🎉",
});
cards.set(4, {
  name: "Bomb Card",
  image: Bomb,
  description: "Sorry you lost 💣",
});

export default function deckCreation() {
  const playDeck = {};
  for (let counter = 1; counter <= 5; counter++) {
    const index = useRandomIndex(1, 4);
    const card = cards.get(index);
    const key = `card${counter}`;
    playDeck[key] = card;
  }
  console.log(playDeck);
  return playDeck;
}
