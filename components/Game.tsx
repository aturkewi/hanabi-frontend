import { useEffect, useState } from "react"

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
  // X played
  // discarded
  // current player
  // guess tokens
  // misfires
  // players
    // cards
  const [deck, setDeck] = useState<CardType[]>([])
  const [players, setPlayers] = useState<PlayerType[]>([])
  const [playedCards, setPlayedCards] = useState<PlayedCardsType[]>({[BLUE]: [], [GREEN]: [], [RED]: [], [WHITE]: [], [YELLOW]: []})
  const [discardedCards, setDiscardedCards] = useState<PlayedCardsType[]>({[BLUE]: [], [GREEN]: [], [RED]: [], [WHITE]: [], [YELLOW]: []})
  const [misses, setMisses] = useState<number>(4)

  useEffect(() => {
    if(misses === 0){
      alert('GAME OVER!')
    }
  }, [misses])

  const deprecateMisses = () => {
    setMisses(misses - 1)
  }

  const startGame = () => {
    const {deck, players} = start()
    setDeck(deck)
    setPlayers(players)
  }

  const handlePlayCard = (playedCard:CardType) => [
    playCard({playedCards, playedCard, players, deck, discardedCards, setDeck, setPlayers, setPlayedCards, setDiscardedCards, deprecateMisses})
  ]

  return(
    <div>
      {players.length === 0 ? (
        <button onClick={startGame}>Deal</button>
      ) : ''}
      <div className="module">
      <h2>Misses Remaining: {misses}</h2>
      </div>

      <PlayedCards title='Played Cards' playedCards={playedCards}/>
      <PlayedCards title='Discarded Cards' playedCards={discardedCards}/>
      <Players players={players} handlePlayCard={handlePlayCard}/>
    </div>
  )
}

export default Game
