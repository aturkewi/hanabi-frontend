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
              {playedCards[color].map(card => <Card key={card.id} cardData={card}/>)}
          </div>
        ))}
      </div>
    </div>
  )
}
