export const BLUE = 'BLUE'
export const GREEN = 'GREEN'
export const RED = 'RED'
export const WHITE = 'WHITE'
export const YELLOW = 'YELLOW'

export const colors = [BLUE, GREEN, RED, WHITE, YELLOW]

// export type Color = typeof colors[number]
// type ValidNumbers = 1|2|3|4|5

// type Card = {
//   color: Color;
//   number: ValidNumbers;
// }

export const generateDeck = () => {
  return colors.reduce((array, color) => {
    return array.concat(generateCardsForColor(color))
  }, [])
}

const generateCardsForColor = (color) => {
  return [1,1,1,2,2,3,3,4,4,5].map(number => {
    return {color: color, number}
  })
}
