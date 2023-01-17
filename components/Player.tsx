import { ClueType } from "../utils/clueHelper";
import { CardType } from "../utils/deckHelper";
import { PlayerType } from "../utils/playerHelper"
import { Card } from "./Card"

const currentPlayerIcon = (current:boolean):string => (
  current ? '⭐️' : '⭕️'
)

const getButtons = ({current, card, player, giveClue, playCard, discardCard}:{current: boolean, card: CardType, player: PlayerType, giveClue: (obj: {clue: ClueType, player: PlayerType}) => void,playCard: (card:CardType) => void, discardCard: (card:CardType) => void;}):JSX.Element => (
  current ? currentPlayerButtons(card, playCard, discardCard) : otherPlayerButtons(card, player, giveClue)
)

const currentPlayerButtons = (card: CardType, playCard: (card:CardType) => void, discardCard: (card:CardType) => void):JSX.Element => (
  <>
    <span onClick={() => playCard(card)}>▶️</span>
    <span onClick={() => discardCard(card)}>🗑</span>
  </>
)

const otherPlayerButtons = (card:CardType, player: PlayerType, giveClue: (obj: {player: PlayerType, clue: ClueType}) => void):JSX.Element => (
  <>
    <span onClick={() => giveClue({player, clue: card.number})}>#️⃣</span>
    <span onClick={() => giveClue({player, clue: card.color})}>🎨</span>
  </>
)

interface ComponentType {
  player: PlayerType;
  playCard: (card: CardType) => void;
  discardCard: (card: CardType) => void;
  giveClue: (obj:{player: PlayerType, clue: ClueType}) => void;
}

const Player = ({ player, playCard, discardCard, giveClue }:ComponentType) => {
  const {hand, id, current} = player
  return (
    <div key={id}>
      {currentPlayerIcon(current)} Player:
        <div className='row'>
          {hand.map(({card}) => (
            <Card key={card.id} cardData={card}>
              {getButtons({current, card, player, playCard, discardCard, giveClue})}
            </Card>
          ))}
        </div>
    </div>
  )
}

export default Player
