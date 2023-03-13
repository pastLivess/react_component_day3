import React, { Component } from 'react'

export class MainProductList extends Component {
  render() {
    const { productList } = this.props
    console.log(this)
    return (
      <div>
        MainProductList
        <ul>
          {productList.map((item) => (
            <li key={item.acm}>{item.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default MainProductList
