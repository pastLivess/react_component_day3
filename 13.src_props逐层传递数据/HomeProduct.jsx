import React, { Component } from 'react'

export class HomeProduct extends Component {
  render() {
    const { name, age } = this.props
    return (
      <div>
        <h2>HomeProduct</h2>
        <h3>{name}</h3>
        <h3>{age}</h3>
      </div>
    )
  }
}

export default HomeProduct
