import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {
    
  render() {
    const {count,increment} = this.props
    return (
      <button onClick={increment}> {this.props.name} Clicked {count} times</button>
    )
  }
}

export default UpdatedComponent(ClickCounter,10)