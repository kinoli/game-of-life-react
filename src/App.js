import React, { Component } from 'react';
import './App.css';
import Board from './components/Board'

class App extends Component {
  constructor() {
    super()
    this.state = {
      size: 30,
      inputValue: ''
    }
  }

  onInputChanged = event => {
    this.setState({ inputValue: event.target.value })
  }

  onResetBoard = () => {
    if (this.state.inputValue) {
      this.setState({size: this.state.inputValue}, () => {
        this.refs.board.restartBoard()
      })
    }
  }

  render() {
    return (
      <div className="life-game">
        <div className="container-fluid">
          <div className="form-group">
            <label>Board Size</label>
            <input type="number" placeholder="Board Size" onBlur={this.onInputChanged} className="form-control mr-3" />
            <small id="emailHelp" className="form-text text-muted">Current Size: {this.state.size}</small>
          </div>        
          <button className="btn-secondary" onClick={() => this.onResetBoard()}>Reset Board</button>
          <Board ref="board" size={this.state.size} />
        </div>
      </div>
    );
  }
}

export default App;
