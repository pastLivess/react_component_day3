import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainProductList from './MainProductList'

export class Main extends Component {
  constructor() {
    super()
    this.state = {
      banners: ['新歌榜', '热歌榜', '飙升榜'],
      productList: ['推荐商品', '热门商品', '流行商品'],
    }
  }
  render() {
    const { productList, banners } = this.state
    return (
      <div>
        Main
        <MainBanner banners={banners} title="轮播图" />
        <MainProductList productList={productList} />
      </div>
    )
  }
}

export default Main
