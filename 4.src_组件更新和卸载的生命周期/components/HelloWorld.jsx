import React from 'react'
class HelloWorld extends React.Component {
  constructor() {
    super()
    this.state = {
      message: 'hello world',
    }
    // console.log('constructor')
  }
  changeMessage() {
    // this.setState做的两件事
    /* 
      1.更新我们修改的数据
      2.重新调用一次render函数
    */
    this.setState({
      message: 'hello react',
    })
  }
  render() {
    console.log('render')
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={() => this.changeMessage()}>修改message</button>
      </div>
    )
  }
  componentDidUpdate() {
    console.log('组件数据更新完成')
  }
  componentWillUnmount() {
    console.log('组件卸载完毕')
  }
}

export default HelloWorld
