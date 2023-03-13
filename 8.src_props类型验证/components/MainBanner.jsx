import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class MainBanner extends Component {
  constructor(props) {
    super(props)
    console.log(this)
  }
  render() {
    const { banners, title } = this.props
    return (
      <div>
        <h2>{title}</h2>
        <ul>
          {banners.map((item) => (
            <li key={item.acm}>{item.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}
MainBanner.propTypes = {
  banners: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}
MainBanner.defineProps = {
  banners: [],
  title: '我是标题',
}
export default MainBanner
