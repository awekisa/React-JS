import React, {Component} from 'react'

class Submit extends Component {
  render () {
    return <input type='submit' className={`btn ${this.props.type}`} value={this.props.value} />
  }
}

export default Submit
