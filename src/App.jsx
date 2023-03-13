import React, { Component } from 'react'
import Home from './Home'
import ThemeContext from './context/theme.context'
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
        {/* 使用context给组件传递数据 */}
        <ThemeContext.Provider value={info}>
          <Home />
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default App
