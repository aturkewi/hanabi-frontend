import { CardType } from './deckHelper'

export type PlayerType = {
  hand: CardType[];
  id: number;
}

export const getPlayers = (numberOfPlayers:number): PlayerType[] => {
  const players = []
  for(let i = 0; i < numberOfPlayers; i++){
    players.push({id: i, hand: []})
  }
  return players
}

export const updatePlayer = (players, player, newCards) => {
  const wihtoutKeyPlayer = players.filter(p => p.id == player.id)
  return [...wihtoutKeyPlayer, {...player, hand: newCards}]
}
