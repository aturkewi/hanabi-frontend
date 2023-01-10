import { CardType } from "../utils/deckHelper"

export const Card = (cardData:CardType) => {
  return (
    <div>
      {cardData.color} {cardData.number}
    </div>
  )
}
