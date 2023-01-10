import { generateDeck, getRandomCard } from "./deckHelper"
import { getPlayers } from "./playerHelper"

export const start = () => {
  let deck = generateDeck()
  const players = getPlayers(4)

  players.forEach(player => {
    for(let i = 0; i < 4; i++){
      console.log(`id: ${player.id}, i: ${i}`)
      const {randomCard, newDeck} = getRandomCard(deck)
      deck = newDeck
      player.hand.push(randomCard)
    }
  })


  return {
    deck,
    players
  }
}
