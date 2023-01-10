import { useState } from "react"

import Player from './Player'
import { CardType } from "../utils/deckHelper"
import { PlayerType } from "../utils/playerHelper"

// import { generateDeck, getRandomCard } from "../utils/deckHelper"
// import { getPlayers, updatePlayer } from '../utils/playerHelper'

import { start } from "../utils/gameStarter"


const Game = () => {
  // X deck
  // played
  // discarded
  // current player
  // guess tokens
  // misfires
  // players
    // cards
  const [deck, setDeck] = useState<CardType[]>([])
  const [players, setPlayers] = useState<PlayerType[]>([])

  const startGame = () => {
    const {deck, players} = start()
    setDeck(deck)
    setPlayers(players)
  }

  const handlePlayCard = () => [
    // handle playing a card
  ]

  return(
    <div>
      <button onClick={startGame}>Deal</button>
      <ul>
        {players.map(player => (
          <li key={player.id}>
            <Player {...player} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Game
