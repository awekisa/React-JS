import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Data from '../Data'

class Books extends Component {
  constructor (props) {
    super(props)

    this.state = {
      books: [],
      authorAscending: true,
      titleAscending: true,
      dateAscending: true
    }
    this.sortByAuthor = this.sortByAuthor.bind(this)
    this.sortByTitle = this.sortByTitle.bind(this)
    this.sortByDate = this.sortByDate.bind(this)
  }

  componentDidMount () {
    this.sortByDate()
  }

  sortByDate () {
    Data.books()
      .then(data => {
        data.books.sort((d1, d2) => {
          return d1.date.getTime() - d2.date.getTime()
        })
        if (!this.state.dateAscending) {
          data.books.reverse()
        }
        this.setState({
          books: data.books,
          dateAscending: !this.state.dateAscending
        })
      })
  }

  sortByAuthor () {
    Data.books()
      .then(data => {
        data.books.sort((b1, b2) => {
          return b1.author.localeCompare(b2.author)
        })
        if (!this.state.authorAscending) {
          data.books.reverse()
        }
        this.setState({
          books: data.books,
          authorAscending: !this.state.authorAscending
        })
      })
  }

  sortByTitle () {
    Data.books()
      .then(data => {
        data.books.sort((b1, b2) => {
          return b1.title.localeCompare(b2.title)
        })
        if (!this.state.titleAscending) {
          data.books.reverse()
        }
        this.setState({
          books: data.books,
          titleAscending: !this.state.titleAscending
        })
      })
  }



  render () {
    let books = this.state.books
    books = books.map(b => {
      let detailsAddress = '/books/' + (b.id - 1)
      return (
        <tr key={b.id}>
          <td>{b.title}</td>
          <td>{b.author}</td>
          <td>{new Date(b.date).toLocaleString()}</td>
          <td><Link to={detailsAddress}>click</Link></td>
        </tr>
      )
    })
    return (
      <table>
        <tbody>
          <tr>
            <th><button onClick={this.sortByTitle}>Title</button></th>
            <th><button onClick={this.sortByAuthor}>Author</button></th>
            <th><button onClick={this.sortByDate}>Date</button></th>
            <th><span>Details</span></th>
          </tr>
          {books}
        </tbody>
      </table>
    )
  }
}

export default Books
