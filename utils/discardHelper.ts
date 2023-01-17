import { CardType } from "./deckHelper"
import { PlayerType, getCurrentPlayer } from "./playerHelper";
import { drawCard, playCard, PlayedCardsType, updatePlayers } from "./playHelper";

interface DiscardCardInterface {
  playedCard: CardType;
  discardedCards: PlayedCardsType[];
  players: PlayerType[];
  deck: CardType[];
  setPlayers: (players: PlayerType[]) => void;
  setDeck: (cards: CardType[]) => void;
  setDiscardedCards: (discardedCards: PlayedCardsType) => void;
  incrementClueCount: () => void;
}

export const discardCard = ({playedCard, discardedCards, players, deck, setPlayers, setDeck, setDiscardedCards, incrementClueCount}:DiscardCardInterface) => {
  // Remove from players hand
  let currentPlayer = getCurrentPlayer(players)
  let hand = currentPlayer.hand
  hand = hand.filter(card => card.id != playedCard.id)

  // Add card to discarded
  setDiscardedCards({...discardedCards, [playedCard.color]: [...discardedCards[playedCard.color], playedCard ]})

  // Increment clue counter
  incrementClueCount()

  // Draw card
  currentPlayer = drawCard({deck, setDeck, hand, currentPlayer})

  // Update players
  updatePlayers(players, currentPlayer, setPlayers)
}
