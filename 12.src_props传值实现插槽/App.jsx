import React, { Component } from 'react'
import NavBar2 from './nav-bar2/NavBar2'
export class App extends Component {
  render() {
    return (
      <div>
        {/* 使用props实现插槽 */}
        <NavBar2 leftSlot={<button>按钮</button>} centerSlot={<h2>center部分</h2>} rightSlot={<i>斜体</i>} />
      </div>
    )
  }
}

export default App
