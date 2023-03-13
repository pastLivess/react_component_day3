import React, { Component } from 'react'
import HomeProduct from './HomeProduct'

export class Home extends Component {
  render() {
    return (
      <div>
        Home
        <HomeProduct {...this.props} />
      </div>
    )
  }
}

export default Home
