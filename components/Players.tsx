import { PlayerType } from "../utils/playerHelper"
import { CardType } from "../utils/deckHelper";
import Player from "./Player"

interface ComponentType {
  players: PlayerType[];
  handlePlayCard: (card: CardType) => void;
  handleDiscardCard: (card: CardType) => void;
}

export const Players = ({ players, handlePlayCard, handleDiscardCard }:ComponentType ) => {
  return (
    <div className="module">
      <h2 className='row'>Players</h2>
      <div>
        {players.map(player => (
          <Player key={player.id} player={player} playCard={handlePlayCard} discardCard={handleDiscardCard}/>
        ))}
      </div>

    </div>
  )
}
