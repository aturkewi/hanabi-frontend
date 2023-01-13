import { CardType } from "./deckHelper"
import { PlayerType } from "./playerHelper";
import { PlayedCardsType } from "./playHelper";

interface DiscardCardInterface {
  playedCard: CardType;
  discardedCards: PlayedCardsType;
  players: PlayerType[];
  deck: CardType[];
  setPlayers: (players: PlayerType[]) => void;
  setDeck: (cards: CardType[]) => void;
  setDiscardedCards: (discardedCards: PlayedCardsType) => void;
  incrementClueCount: () => void;
}

export const discardCard = ({playedCard, discardedCards, players, deck, setPlayers, setDeck, setDiscardedCards, incrementClueCount}:DiscardCardInterface) => {
  // Remove from players hand
  // Add card to discarded
  // Increment clue counter
  // Get random card from deck
  // Add card to players hand
}
