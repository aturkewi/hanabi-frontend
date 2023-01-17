import { PlayerType } from "../utils/playerHelper"
import { CardType } from "../utils/deckHelper";
import Player from "./Player"
import { ClueType } from "../utils/clueHelper";

interface ComponentType {
  players: PlayerType[];
  handlePlayCard: (card: CardType) => void;
  handleDiscardCard: (card: CardType) => void;
  handleGiveClue: (obj:{player: PlayerType, clue: ClueType}) => void;
}

export const Players = ({ players, handlePlayCard, handleDiscardCard, handleGiveClue }:ComponentType ) => {
  return (
    <div className="module">
      <h2 className='row'>Players</h2>
      <div>
        {players.map(player => (
          <Player key={player.id} player={player} playCard={handlePlayCard} discardCard={handleDiscardCard} giveClue={handleGiveClue}/>
        ))}
      </div>

    </div>
  )
}
