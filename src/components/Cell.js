export default class Cell {
  constructor(x, y) {
    this.alive = Math.random() >= 0.5
    this.neighbors = []
    this.coords = {
      x: x,
      y: y
    }
  }

  saveNextState() {
    const aliveNeighbors = this.neighbors.filter(n => n.alive)
    this.nextAlive = 
      (aliveNeighbors.length === 3 && !this.alive) ||
      ([2, 3].includes(aliveNeighbors.length) && this.alive)
  }

  setNextState() {
    this.alive = this.nextAlive
    this.nextAlive = null
  }
}