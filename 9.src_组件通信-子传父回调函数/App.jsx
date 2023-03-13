import React, { Component } from 'react'
import AddCounter from './AddCounter'
import SubCounter from './SubCounter'
export class App extends Component {
  constructor() {
    super()
    this.state = {
      counter: 100,
    }
  }
  increment(count) {
    this.setState({
      counter: this.state.counter + count,
    })
  }
  decrement(count) {
    this.setState({
      counter: this.state.counter - count,
    })
  }
  render() {
    return (
      <div>
        当前计数:{this.state.counter}
        <AddCounter addClick={(count) => this.increment(count)} />
        <SubCounter subClick={(count) => this.decrement(count)} />
      </div>
    )
  }
}

export default App
