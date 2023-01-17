import { CardType } from './deckHelper'

export type PlayerType = {
  hand: HeldCardType[];
  current: boolean;
  id: string;
}
export type HeldCardType = {
  showColor: boolean;
  showNumber: boolean;
  card: CardType;
}

export const getPlayers = (numberOfPlayers:number): PlayerType[] => {
  const players = []
  for(let i = 0; i < numberOfPlayers; i++){
    players.push({id: `player-${i}`, hand: [], current: false})
  }
  players[0].current = true
  return players
}

export const getCurrentPlayer = (players:PlayerType[]):PlayerType => players.find(player => player.current) as PlayerType
