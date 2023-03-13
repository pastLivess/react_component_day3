import React from 'react'
// 定义类组件
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      message: 'hello',
    }
  }
  render() {
    const { message } = this.state
    //  1.返回react元素 通过jsx编写代码都会被编译为React.createElement(),所以返回的就是一个react元素
    // 2.返回一个数组或者fragments(后面说) ->数组中可以存放react元素或普通元素,会被遍历出来呈现在页面
    // 3.Portals ->后面再说
    // 4.字符串或数值类型
    return (
      <div>
        <h2>{message}</h2>
      </div>
    )
  }
}

export default App
