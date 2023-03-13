import React from 'react'

// 函数式组件 在没有hook的情况下
/* 
  1.函数式组件没有自己的生命周期
  2.函数式组件无法保存状态(state)
  3.函数式组件没有自己的this
*/
function App() {
  // 函数组件返回值与类组件中返回值一样
  return <h1>hello react</h1>
}

export default App
