import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Data from '../Data'
import BooksContainer from './BooksContainer'
import queryString from 'query-string'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      books: []
    }
  }

  componentDidMount () {
    Data.books()
      .then(data => {
        this.setState({
          books: data.books
        })
      })
  }

  render () {
    let queryStringObj = queryString.parse(this.props.location.search)
    let arrayBooks = this.state.books.sort((a, b) => {
      return b.date - a.date
    })

    return (
      <div>
        <BooksContainer books={arrayBooks} />
      </div>
    )
  }
}

export default Home
