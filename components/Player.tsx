import { PlayerType } from "../utils/playerHelper"
import { Card } from "./Card"

const currentPlayerIcon = (current:boolean):string => (
  current ? '⭐️' : '⭕️'
)

const Player = ({ hand, id, current }:PlayerType) => {
  return (
    <div key={id}>
      {currentPlayerIcon(current)} Player:
      <ul>
        {hand.map(card => (
          <li key={card.id}>
            <Card {...card} />
          </li>
        ) )}
      </ul>
    </div>
  )
}

export default Player
