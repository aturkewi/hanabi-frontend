import { CardType, ColorType, getRandomCard } from "./deckHelper"
import { PlayerType } from "./playerHelper";

export type PlayedCardsType = {
  [key: ColorType]: CardType[]
}

interface Cards {
  playedCards: PlayedCardsType[];
  playedCard: CardType;
}

interface ActOnCard {
  deprecateMisses: () => void;
  setDeck: (a: CardType[]) => void;
  setPlayers: (players: PlayerType[]) => void;
  setPlayedCards: (playedCards: PlayedCardsType[]) => void;
  setDiscardedCards: (playedCards: PlayedCardsType[]) => void;
  players: PlayerType[];
  discardedCards: PlayedCardsType[];
  deck: CardType[];
}

type ActOnCardType = Cards & ActOnCard

export const playCard = ({playedCards, discardedCards, playedCard, players, deck, setDeck, setPlayers, setPlayedCards, setDiscardedCards, deprecateMisses}: ActOnCardType) => {
  let currentPlayer = players.find(player => player.current) as PlayerType
  let hand = currentPlayer.hand
  if(isPlayable({playedCards, playedCard})){
    // add card to played cards
    setPlayedCards({...playedCards, [playedCard.color]: [...playedCards[playedCard.color], playedCard]})
  }else{
    // add card to discarded cards
    setDiscardedCards({...discardedCards, [playedCard.color]: [...discardedCards[playedCard.color], playedCard ]})
    // signal to deprecate counter
    deprecateMisses()
  }
  // remove card from player hand
  hand = hand.filter(card => card.id != playedCard.id)

  // draw new card
  const {randomCard, newDeck} = getRandomCard(deck)
  setDeck(newDeck)
  hand = [...hand, randomCard]
  currentPlayer = {...currentPlayer, hand}

  // change current player
  const newPlayerList = updatePlayers(players, currentPlayer)

  setPlayers(newPlayerList)
}

const updatePlayers = (players: PlayerType[], currentPlayer: PlayerType): PlayerType[] => {
  const currentPlayerIndex = players.findIndex(player => player.id === currentPlayer.id)
  const nextPlayerIndex = players.length - 1 === currentPlayerIndex ? 0 : currentPlayerIndex + 1
  const newPlayerList = [...players]

  newPlayerList[currentPlayerIndex] = {...currentPlayer, current: false}
  newPlayerList[nextPlayerIndex] = {...players[nextPlayerIndex], current: true}

  return newPlayerList
}

const isPlayable = ({playedCards, playedCard}: Cards):boolean => {
  const cardsOnColor = playedCards[playedCard.color]
  const lastPlayed = cardsOnColor[cardsOnColor.length - 1]
  if(lastPlayed === undefined && playedCard.number === 1){
    // no cards have been played for this color yet
    return true
  }else if((lastPlayed && lastPlayed.number + 1) === playedCard.number){
    // adding the next card to the color
    return true
  }else{
    // card cannot be played
    return false
  }
}
