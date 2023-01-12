import { CardType, ColorType } from "./deckHelper"

type PlayedCardsType = {
  [key: ColorType]: CardType[]
}

interface Cards {
  playedCards: PlayedCardsType;
  playedCard: CardType;
}

export const playCard = ({playedCards, playedCard}: Cards) => {
  if(isPlayable({playedCards, playedCard})){
    // add card to played cards
  }else{
    // add card to discarded cards
    // signal to deprecate counter
  }
  // draw new card
  // change current player
}

const isPlayable = ({playedCards, playedCard}: Cards):boolean => {
  const cardsOnColor = playedCards[playedCard.color]
  const lastPlayed = cardsOnColor[cardsOnColor.length - 1]
  if(lastPlayed === undefined && playedCard.number === 1){
    // no cards have been played for this color yet
    return true
  }else if((lastPlayed.number + 1) === playedCard.number){
    // adding the next card to the color
    return true
  }else{
    // card cannot be played
    return false
  }
}
