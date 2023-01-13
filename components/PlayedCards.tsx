import { Card } from "./Card"
import { PlayedCardsType } from "../utils/playHelper"

export const PlayedCards = ({playedCards, title}:{playedCards: PlayedCardsType[], title: string}) => {
  return (
    <div className="module">
      <div className="row">
        <h2>{title}</h2>
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
