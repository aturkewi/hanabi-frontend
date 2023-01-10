export const BLUE = 'BLUE'
export const GREEN = 'GREEN'
export const RED = 'RED'
export const WHITE = 'WHITE'
export const YELLOW = 'YELLOW'

export const colors = [BLUE, GREEN, RED, WHITE, YELLOW]

type ColorType = typeof colors[number]
type ValidNumbers = 1|2|3|4|5

export type CardType = {
  color: ColorType;
  number: ValidNumbers;
  id: number;
}

export const generateDeck = (): CardType[] => {
  return colors.reduce((array, color) => {
    return array.concat(generateCardsForColor(color))
  }, []).sort((a, b) => 0.5 - Math.random());
}

const generateCardsForColor = (color:ColorType) => {
  let id = 0
  return [1,1,1,2,2,3,3,4,4,5].map(number => {
    id++
    return {color: color, number, id}
  })
}

export const getRandomCard = (deck:CardType[]): {randomCardType: CardType, newDeck: CardType[]} => {
  const index = Math.floor(Math.random()*deck.length)
  const randomCard = deck[index]
  const newDeck = deck.slice(0,index).concat(deck.slice(index + 1, deck.length))
  return {randomCard, newDeck}
}
