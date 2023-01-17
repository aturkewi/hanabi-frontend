import { generateDeck, getRandomCard } from "./deckHelper"
import { getPlayers } from "./playerHelper"

export const start = () => {
  let deck = generateDeck()
  const players = getPlayers(4)

  players.forEach(player => {
    for(let i = 0; i < 4; i++){
      const {randomCard, newDeck} = getRandomCard(deck)
      deck = newDeck
      player.hand.push({card: randomCard, showColor: false, showNumber: false})
    }
  })


  return {
    deck,
    players
  }
}
