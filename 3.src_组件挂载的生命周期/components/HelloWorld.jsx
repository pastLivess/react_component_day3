import React from 'react'
class HelloWorld extends React.Component {
  constructor() {
    super()
    console.log('constructor') //1. 先执行constructor
  }

  render() {
    console.log('render') //2. 再执行render
    return <h2>helo world</h2>
  }
  componentDidMount() {
    console.log('组件被挂载完毕') //3. 最终组件成功挂载调用该生命周期函数
  }
}

export default HelloWorld
