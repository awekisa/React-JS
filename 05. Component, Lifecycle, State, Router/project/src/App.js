import React, { Component } from 'react'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Data from './Data'
import Header from './components/Header'
import Footer from './components/Footer'
import Router from './Router'
import './App.css'


class App extends Component {
  render () {
    return (
      <div className='container'>
        <Header />
        <Router />
        <Footer />
      </div>
    )
  }
}

export default App
