import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import UserStore from '../stores/UserStore'
import UserActions from '../actions/UserActions'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = UserStore.getState()

    this.onChange = this.onChange.bind(this)
  }

  onChange (state) {
    this.setState(state)
  }

  componentDidMount () {
    UserStore.listen(this.onChange)
  }

  componentWillUnmount () {
    UserStore.unlisten(this.onChange)
  }

  render () {
    return (
      <div>
        <Navbar />
        { this.props.children }
        <Footer />
      </div>
    )
  }
}
