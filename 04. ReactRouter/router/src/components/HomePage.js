import React, {Component} from 'react'

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.redirectToAbout = this.redirectToAbout.bind(this)
  }
  redirectToAbout () {
    this.props.history.push('about')
  }
  render () {
    return (
      <div>
        <h3>Hi from Home Page</h3>
        <button onClick={this.redirectToAbout}>Go to About</button>
      </div>
    )
  }
}

export default HomePage
