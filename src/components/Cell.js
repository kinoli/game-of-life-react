import React, { Component } from 'react'

export default class Cell extends Component {
  render() {
    const { alive, style } = this.props

    return <div className={alive ? 'active' : ''} style={style} />
  }
}