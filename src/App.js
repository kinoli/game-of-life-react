import React, { Component } from 'react';
import './App.css';
import Board from './components/Board'

class App extends Component {
  constructor() {
    super()
    this.state = {
      size: 30,
      sizeInput: 30,
      interval: 50,
      intervalInput: 50,
      blockSize: 20
    }
  }

  onSizeChanged = event => {
    this.setState({ sizeInput: event.target.value })
  }

  onIntervalChanged = event => {
    this.setState({ intervalInput: event.target.value })
  }

  onResetBoard = () => {
    if (this.state.sizeInput && this.state.intervalInput) {
      this.setState({size: this.state.sizeInput, interval: this.state.intervalInput}, () => {
        this.refs.board.restartBoard()
      })
    }
  }

  render() {
    const width = this.state.size * this.state.blockSize
    const boardStyle = {
      width: `${width}px`,
      height: `${width}px`
    }

    return (
      <div className="text-center">
        <h1 class="mt-4">The Game of Life - Built in React</h1>
        <p class="mb-4">The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank">Rules of the game</a>.</p>
        <div className="life-game">
          <div className="container-fluid">
            <div className="form-group">
              <label>Board Size</label>
              <input type="number" onChange={this.onSizeChanged} value={this.state.sizeInput} className="form-control d-inline-block mx-3" />
              <small className="form-text d-inline-block text-muted">Current Size: {this.state.size}</small>
            </div>     
            <div className="form-group">
              <label>Interval</label>
              <input type="number" onChange={this.onIntervalChanged} value={this.state.intervalInput} className="form-control d-inline-block mx-3" />
              <small className="form-text d-inline-block text-muted">In milliseconds</small>
            </div>        
            <button className="btn-secondary" onClick={() => this.onResetBoard()}>Reset Board</button>
            <div className="board-holder">
              <Board ref="board" size={this.state.size} interval={this.state.interval} blockSize={this.blockSize} style={boardStyle} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
