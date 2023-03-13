import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App
