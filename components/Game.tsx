import { useState } from "react"

import Player from './Player'
import { CardType, BLUE, GREEN, RED, WHITE, YELLOW } from "../utils/deckHelper"
import { PlayerType } from "../utils/playerHelper"
import { PlayedCardsType, playCard } from "../utils/playHelper"

// import { generateDeck, getRandomCard } from "../utils/deckHelper"
// import { getPlayers, updatePlayer } from '../utils/playerHelper'

import { start } from "../utils/gameStarter"
import { PlayedCards } from "./PlayedCards"
import { Players } from "./Players"


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
  const [playedCards, setPlayedCards] = useState<PlayedCardsType[]>({[BLUE]: [], [GREEN]: [], [RED]: [], [WHITE]: [], [YELLOW]: []})

  const startGame = () => {
    const {deck, players} = start()
    setDeck(deck)
    setPlayers(players)
  }

  const handlePlayCard = (playedCard:CardType) => [
    // handle playing a card
    playCard({playedCards, playedCard, players, deck, setDeck, setPlayers, setPlayedCards})
  ]

  return(
    <div>
      {players.length === 0 ? (
        <button onClick={startGame}>Deal</button>
      ) : ''}
      <PlayedCards playedCards={playedCards}/>
      <Players players={players} handlePlayCard={handlePlayCard}/>
    </div>
  )
}

export default Game
