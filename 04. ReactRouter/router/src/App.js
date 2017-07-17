import React, {Component} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Router from './Router'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        {/*<div className='container'>*/}
          <Router />
        {/*</div>*/}
        <Footer />
      </div>
    )
  }
}

export default App
