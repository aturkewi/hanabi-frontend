import { CardType } from "../utils/deckHelper"
import styles from './Card.module.css'

export const Card = ({cardData, children}:{children?:JSX.Element, cardData:CardType}) => {
  // If current player
  //  - Play
  //  - Discard
  // Else
  //  - Give clue
  // If not in hand, do nothing
  return (
    <div className={`${styles.card} ${styles[cardData.color.toLowerCase()]}`}>
      {cardData.number}
      <div className={styles.actions}>
        {children ? children : ''}
      </div>
    </div>
  )
}
