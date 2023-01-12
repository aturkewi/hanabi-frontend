import { CardType } from "../utils/deckHelper";
import { PlayerType } from "../utils/playerHelper"
import { Card } from "./Card"

const currentPlayerIcon = (current:boolean):string => (
  current ? '⭐️' : '⭕️'
)

interface ComponentType {
  player: PlayerType;
  playCard: (card: CardType) => void;
}

const Player = ({ player: {hand, id, current}, playCard }:ComponentType) => {
  return (
    <div key={id}>
      {currentPlayerIcon(current)} Player:
      <ul>
        {hand.map(card => (
          <li key={card.id} onClick={() => playCard(card)}>
            <Card {...card} />
          </li>
        ) )}
      </ul>
    </div>
  )
}

export default Player
