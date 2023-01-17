import { ColorType, ValidNumbers } from "./deckHelper"
import { PlayerType } from "./playerHelper";
import { updatePlayers } from "./playHelper";

interface GiveClueInterface {
  clue: ClueType;
  players: PlayerType[];
  player: PlayerType;
  setPlayers: (a: PlayerType[]) => void;
  decrementClueCount: () => void;
}

export type ClueType = ColorType | ValidNumbers;

export const giveClue = ({clue, player, players, setPlayers, decrementClueCount}:GiveClueInterface) => {
  const hand = player.hand

  // mark all cards in players hand for clue
  // NOT GETTING PROPERLY MARKED
  const newHand = hand.map(heldCard => {
    const newHeldCard = {...heldCard}
    if(heldCard.card.color === clue){
      newHeldCard.showColor = true
    }
    if(heldCard.card.number === clue){
      newHeldCard.showNumber = true
    }
    return newHeldCard
  })

  // update player hand
  // next player
  const newPlayer = {...player, hand: newHand}

  const newPlayers = [...players]
  const playerIndex = newPlayers.findIndex(p => p.id === player.id)
  newPlayers[playerIndex] = newPlayer
  updatePlayers(players, setPlayers)

  // decrement clue counter
  decrementClueCount()
}
