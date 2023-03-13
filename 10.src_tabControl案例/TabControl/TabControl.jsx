import React, { Component } from 'react'
import './TabControl.css'
export class TabControl extends Component {
  constructor() {
    super()
    this.state = {
      currentActiveIndex: 0,
    }
  }
  itemClick(index) {
    this.setState({
      currentActiveIndex: index,
    })
    this.props.tabClick(index)
  }
  render() {
    const { titles } = this.props
    const { currentActiveIndex } = this.state
    const liEls = titles.map((item, index) => (
      <li
        onClick={() => this.itemClick(index)}
        className={`item ${currentActiveIndex === index ? 'active' : ''}`}
        key={item}
      >
        {item}
      </li>
    ))
    return (
      <div className="tab-control">
        <ul className="list">{liEls}</ul>
      </div>
    )
  }
}

export default TabControl
