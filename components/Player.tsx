const Player = ({ hand, id }) => {
  return (
    <div key={id}>
      Player:
      {hand.map(card => `${card.color}${card.number}`)}
    </div>
  )
}

export default Player
