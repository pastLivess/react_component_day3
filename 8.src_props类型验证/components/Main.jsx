import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainProductList from './MainProductList'
import MyRequest from '../service/index'
export class Main extends Component {
  constructor() {
    super()
    this.state = {
      banners: [],
      productList: [],
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
  componentDidMount() {
    MyRequest.get({
      url: '/home/multidata',
    }).then((res) => {
      const banners = res.data.banner.list
      const recommend = res.data.recommend.list
      this.setState({
        banners,
        productList: recommend,
      })
    })
  }
}

export default Main
