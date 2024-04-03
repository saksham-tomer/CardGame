import useRandomIndex from "./useRandomIndex.js";

function withdraw(playDeck) {
  let defuseCounter = 0;

  while (playDeck.length > 0) {
    const index = useRandomIndex(0, playDeck.length - 1);
    const drawnCard = playDeck[index];
    console.log(`Drawn Card: ${drawnCard}`);

    if (drawnCard === "Cat Card") {
      playDeck.splice(index, 1);
    } else if (drawnCard === "Bomb Card") {
      if (defuseCounter > 0) {
        console.log("You defused the bomb!");
        defuseCounter--;
      } else {
        console.log("You lose!");
        break;
      }
    } else if (drawnCard === "Defuse Card") {
      defuseCounter++;
      playDeck.splice(index, 1);
    } else if (drawnCard === "Reshuffle Card") {
      console.log("Reshuffling the deck...");
      playDeck.length = 0; // Empty the deck
      playDeck.push(...deckCreation()); // Fill the deck again
    } else {
      console.log("Invalid card!");
      break;
    }

    console.log(`Remaining Cards in Deck: ${playDeck}`);
  }

  if (playDeck.length === 0) {
    console.log("You win!");
  }
}
