import React, {Component} from 'react'
import Book from './Book'

class BooksContainer extends Component {
  render () {
    let array = this.props.books.map((b, i) => {
      return <Book key={b.id} title={b.title} author={b.author} date={b.date} details={b.details} />
    })
    return (
      <div className='book-container'>
        {array}
      </div>
    )
  }
}

export default BooksContainer
