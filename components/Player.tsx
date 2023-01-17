import { CardType } from "../utils/deckHelper";
import { PlayerType } from "../utils/playerHelper"
import { Card } from "./Card"

const currentPlayerIcon = (current:boolean):string => (
  current ? '⭐️' : '⭕️'
)

const getButtons = ({current, card, playCard, discardCard}:{current: boolean, card: CardType, playCard: (card:CardType) => void, discardCard: (card:CardType) => void;}):JSX.Element => (
  current ? currentPlayerButtons(card, playCard, discardCard) : otherPlayerButtons()
)

const currentPlayerButtons = (card: CardType, playCard: (card:CardType) => void, discardCard: (card:CardType) => void):JSX.Element => (
  <>
    <span onClick={() => playCard(card)}>▶️</span>
    <span onClick={() => discardCard(card)}>🗑</span>
  </>
)

const otherPlayerButtons = ():JSX.Element => (
  <>
    <span>#️⃣</span>
    <span>🎨</span>
  </>
)

interface ComponentType {
  player: PlayerType;
  playCard: (card: CardType) => void;
  discardCard: (card: CardType) => void;
}

const Player = ({ player: {hand, id, current}, playCard, discardCard }:ComponentType) => {
  return (
    <div key={id}>
      {currentPlayerIcon(current)} Player:
        <div className='row'>
          {hand.map(({card}) => (
            <Card key={card.id} cardData={card}>
              {getButtons({current, card, playCard, discardCard})}
            </Card>
          ))}
        </div>
    </div>
  )
}

export default Player
