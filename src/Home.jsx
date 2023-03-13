import React, { Component } from 'react'
import HomeBanner from './HomeBanner'
import HomeProduct from './HomeProduct'

export class Home extends Component {
  render() {
    return (
      <div>
        Home
        <HomeProduct />
        <HomeBanner />
      </div>
    )
  }
}

export default Home
