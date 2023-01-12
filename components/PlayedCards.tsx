import { Card } from "./Card"
import { PlayedCardsType } from "../utils/playHelper"

export const PlayedCards = ({playedCards}:{playedCards: PlayedCardsType[]}) => {
  return (
    <div>
      <h2>Played Cards</h2>
      <ul>
        {Object.keys(playedCards).map(color => (
          <li key={color}>
            <h3>{color}</h3>
            <ul>
              {playedCards[color].map(card => <li key={card.id}><Card {...card}/></li>)}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
