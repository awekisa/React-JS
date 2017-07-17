import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Book extends Component {
  render () {
    let date = new Date(this.props.date)
    return (
      <div className='book-container'>
        <h3>{this.props.title}</h3>
        <h4>{this.props.author}</h4>
        <h5>{date.toLocaleString()}</h5>
        <Link to={this.props.details}>Details</Link>
      </div>
    )
  }
}

export default Book
