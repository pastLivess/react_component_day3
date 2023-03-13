import React from 'react'
import HelloWorld from './components/HelloWorld'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isShow: true,
    }
  }
  changeIsShow() {
    this.setState({
      isShow: !this.state.isShow,
    })
  }
  render() {
    const { isShow } = this.state
    return (
      <div>
        {isShow && <HelloWorld />}
        <button onClick={() => this.changeIsShow()}>修改isShow</button>
      </div>
    )
  }
}

export default App
