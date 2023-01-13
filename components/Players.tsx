import { PlayerType } from "../utils/playerHelper"
import { CardType } from "../utils/deckHelper";
import Player from "./Player"

export const Players = ({ players, handlePlayCard }:{players: PlayerType[], handlePlayCard: (card: CardType) => void;} ) => {
  return (
    <div className="module">
      <h2 className='row'>Players</h2>
      <div className="row">
        {players.map(player => (
          <Player key={player.id} player={player} playCard={handlePlayCard}/>
        ))}
      </div>

    </div>
  )
}
