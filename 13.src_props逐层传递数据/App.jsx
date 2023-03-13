import React, { Component } from 'react'
import Home from './Home'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      info: { name: 'info', age: 20 },
    }
  }
  render() {
    const { info } = this.state
    return (
      <div>
        {/* {...info} 这种语法可以将对象展开,并将所有的key传递给该组件 */}
        <Home {...info} />
      </div>
    )
  }
}

export default App
