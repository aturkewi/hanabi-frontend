export const BLUE = 'BLUE'
export const GREEN = 'GREEN'
export const RED = 'RED'
export const WHITE = 'WHITE'
export const YELLOW = 'YELLOW'

export const colors = [BLUE, GREEN, RED, WHITE, YELLOW]

type Color = typeof colors[number]
type ValidNumbers = 1|2|3|4|5

export type Card = {
  color: Color;
  number: ValidNumbers;
}

export const generateDeck = (): Card[] => {
  return colors.reduce((array, color) => {
    return array.concat(generateCardsForColor(color))
  }, []).sort((a, b) => 0.5 - Math.random());
}

const generateCardsForColor = (color) => {
  return [1,1,1,2,2,3,3,4,4,5].map(number => {
    return {color: color, number}
  })
}

export const getRandomCard = (deck:Card[]): {randomCard: Card, newDeck: Card[]} => {
  const index = Math.floor(Math.random()*deck.length)
  const randomCard = deck[index]
  const newDeck = deck.slice(0,index).concat(deck.slice(index + 1, deck.length))
  return {randomCard, newDeck}
}
