import React, { Component } from 'react';
import Cell from './Cell'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      size: null,
      grid: []
    }
  }

  restartBoard() {
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
        const newCell = new Cell(x, y)
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
    this.setState({grid: gridWithNeighbors})
      
    setInterval(() => this.setNextState(), 100)
  }

  getNeighbors(cell) {
    const max = this.state.size - 1
    return this.state.grid.filter(n => {
      if (n !== cell) {
        const xFlag = Math.abs(n.coords.x - cell.coords.x) <= 1 || Math.abs(cell.coords.x - n.coords.x) === max
        const yFlag = Math.abs(n.coords.y - cell.coords.y) <= 1 || Math.abs(cell.coords.y - n.coords.y) === max
        return (xFlag && yFlag) || null
      }
      return null
    })
  }

  setNextState() {
    this.state.grid.map(c => c.saveNextState())
    this.state.grid.map(c => c.setNextState())
    this.forceUpdate()
  }

  render() {
    const grid = this.state.grid.map((c, index) => {
      const style = {
        left: `${c.coords.x * 20}px`,
        top: `${c.coords.y * 20}px`
      }
      return <div key={index} className={c.alive ? 'active' : ''} style={style} />
    })

    return (
      <div className="grid clearfix">
        {grid}
      </div>
    )
  }
}