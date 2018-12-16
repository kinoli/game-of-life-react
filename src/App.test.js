

it('', () => {

})
// describe('the game of life board', () => {
//   it('creates an empty SQUARE board of correct size', () => {
//     const board = new Board(10)
//     expect(board.cells.length).toBe(10*10)
//     expect(board.cells.filter(x => x.alive === true).length).toBe(0)

//     for (let cell of board.cells) {
//       expect(cell instanceof Cell).toBe(true)
//     }
//   })
// })

// describe('the game of life cells', () => {
//   const mycell = new Cell()

//   it('Any live cell with fewer than two live neighbors dies, as if by underpopulation', () => {
//     expect(mycell.setState(true, 0).alive).toBe(false)
//     expect(mycell.setState(true, 0).aliveNeighbors).toBe(0)
//     expect(mycell.setState(true, 1).alive).toBe(false)
//     expect(mycell.setState(true, 1).aliveNeighbors).toBe(1)
//   })

//   it('Any live cell with two or three live neighbors lives on to the next generation', () => {
//     expect(mycell.setState(true, 2).alive).toBe(true)
//     expect(mycell.setState(true, 3).alive).toBe(true)
//   })

//   it('Any live cell with more than three live neighbors dies, as if by overpopulation', () => {
//     expect(mycell.setState(true, 4).alive).toBe(false)
//     expect(mycell.setState(true, 5).alive).toBe(false)
//     expect(mycell.setState(true, 6).alive).toBe(false)
//     expect(mycell.setState(true, 7).alive).toBe(false)
//     expect(mycell.setState(true, 8).alive).toBe(false)
//   })

//   it('Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction', () => {
//     expect(mycell.setState(false, 0).alive).toBe(false)
//     expect(mycell.setState(false, 1).alive).toBe(false)
//     expect(mycell.setState(false, 2).alive).toBe(false)
//     expect(mycell.setState(false, 3).alive).toBe(true)
//     expect(mycell.setState(false, 4).alive).toBe(false)
//     expect(mycell.setState(false, 5).alive).toBe(false)
//     expect(mycell.setState(false, 6).alive).toBe(false)
//     expect(mycell.setState(false, 7).alive).toBe(false)
//     expect(mycell.setState(false, 8).alive).toBe(false)
//   })
// })
