import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render () {
    let arr = [1, 2, 3]
    let str = ''
    for (var i = 0; i < arr.length; i++) {
      str += arr[i]
    }

    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <p className='App-intro'>
          <h1>Hello!</h1>
          <h2>{str}</h2>
        </p>
      </div>
    )
  }
}

export default App
