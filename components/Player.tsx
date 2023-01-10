import { PlayerType } from "../utils/playerHelper"
import { Card } from "./Card"

const Player = ({ hand, id }:PlayerType) => {
  return (
    <div key={id}>
      Player:
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
