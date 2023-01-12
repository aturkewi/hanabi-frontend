import { start } from "./gameStarter";

test('something', () => {
  const {deck, players} = start()

  expect(deck.length).toEqual(34)
  expect(players.length).toEqual(4)
})
