import { useState } from "react"

import { generateDeck } from "../utils/deckHelper"

const Game = () => {
  // X deck
  // played
  // discarded
  // current player
  // guess tokens
  // misfires
  // players
    // cards
  const [deck, setDeck] = useState(generateDeck())

  return(
    <div>
      This is game.
      {console.log(deck)}
    </div>
  )
}

export default Game
