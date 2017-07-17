import React, {Component} from 'react'
import Data from '../Data'

class BookDetails extends Component {
  constructor (props) {
    super(props)

    this.state = {
      book: '',
      comments: [],
      date: ''
    }
  }

  componentDidMount () {
    Data.books()
      .then(data => {
        let bookId = this.props.match.params.id
        console.log(bookId)
        let book = data.books[bookId]
        this.setState({
          book: book,
          comments: book.comments,
          date: book.date
        })
      })
  }

  render () {
    let book = this.state.book
    let comments = this.state.comments
    let date = this.state.date.toLocaleString()
    comments = comments.map((c, i) => <div key={i}>...{c}</div>)

    return (
      <div className='book-container'>
        <h3>{book.title}</h3>
        <img src={book.image} width='350' height='300' />
        <h4>By {book.author}</h4>
        <h5>{book.description}</h5>
        <h5>Price: {book.price} USD</h5>
        <h5>{date}</h5>
        <div className='comments'>
          Comments
          {comments}
        </div>

      </div>
    )
  }
}

export default BookDetails
