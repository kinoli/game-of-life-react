import React, { Component } from 'react'
import Cell from './Cell'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      size: null,
      grid: [],
      startTime: 0,
      buildTime: 0
    }
    this.intervalId = null
  }

  restartBoard() {
    clearInterval(this.intervalId)
    this.setState({startTime: new Date()})
    this.setState({grid: []})
    this.setState({size: this.props.size}, () => {
      this.buildGrid()
    })
  }

  componentDidMount() {
    this.restartBoard()
  }

  buildGrid() {
    const gridConstruction = []
    for(let x = 0; x < this.state.size; x++) {
      for(let y = 0; y < this.state.size; y++) {
        const newCell = {
          alive: Math.random() >= 0.5,
          coords: {
            x: x,
            y: y
          }
        }
        gridConstruction.push(newCell)
      }
    }
    this.setState({grid: gridConstruction}, () => {
      this.assignNeighbors()
    })
  }

  assignNeighbors() {
    const gridWithNeighbors = this.state.grid.map(cell => {
      cell.neighbors = this.getNeighbors(cell)
      return cell
    })
    this.setState({grid: gridWithNeighbors}, () => {
      this.setState({buildTime:  new Date() - this.state.startTime})
      clearInterval(this.intervalId)
      this.intervalId = setInterval(() => this.setNextState(), this.props.interval)
    })
  }

  getNeighbors(cell) {
    const max = this.state.size - 1
    const result = []
    this.state.grid.filter(n => {
      if (result.length < 8 && n !== cell) {
        const xDiff = Math.abs(n.coords.x - cell.coords.x)
        const xFlag = xDiff <= 1 || xDiff === max
        if (xFlag) {
          const yDiff = Math.abs(n.coords.y - cell.coords.y)
          const yFlag = yDiff <= 1 || yDiff === max
          if (yFlag) {
            result.push(n)
          }
        }
      }
    })
    return result
  }

  setNextState() {
    const gridWithNewSavedStates = [...this.state.grid].map(cell => {
      const aliveNeighbors = cell.neighbors.filter(n => n.alive)
      cell.nextAliveState = 
        (aliveNeighbors.length === 3 && !cell.alive) ||
        ([2, 3].includes(aliveNeighbors.length) && cell.alive)
      return cell
    })
    const newGrid = gridWithNewSavedStates.map(cell => {
      cell.alive = cell.nextAliveState
      cell.nextAliveState = null
      return cell
    })
    this.setState({grid: newGrid})
    // this.forceUpdate()
  }

  render() {
    const { blockSize } = this.props

    const grid = this.state.grid.map((c, index) => {
      const style = {
        left: `${c.coords.x * blockSize}px`,
        top: `${c.coords.y * blockSize}px`
      }
      return <Cell key={index} alive={c.alive} style={style} />
    })

    return (
      <div>
        <p className="text-center"><small>Execution Load Time: {this.state.buildTime} ms</small></p>
        <div className="grid clearfix" style={this.props.style}>
          {grid}
        </div>
      </div>
    )
  }
}