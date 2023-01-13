import { Card } from "./Card"
import { PlayedCardsType } from "../utils/playHelper"

export const PlayedCards = ({playedCards}:{playedCards: PlayedCardsType[]}) => {
  return (
    <div className="module">
      <div className="row">
        <h2>Played Cards</h2>
      </div>
      <div className="row">
        {Object.keys(playedCards).map(color => (
          <div key={color}>
            <h3>{color}</h3>
            <ul>
              {playedCards[color].map(card => <li key={card.id}><Card {...card}/></li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
