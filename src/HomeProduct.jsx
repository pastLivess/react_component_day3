import React, { Component } from 'react'

import ThemeContext from './context/theme.context'
export class HomeProduct extends Component {
  render() {
    const { name, age } = this.context
    return (
      <div>
        <h2>HomeProduct</h2>
        <h3>{name}</h3>
        <h3>{age}</h3>
      </div>
    )
  }
}
HomeProduct.contextType = ThemeContext
export default HomeProduct
