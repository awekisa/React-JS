import React, {Component} from 'react'
import Data from '../Data'

class AuthorDetails extends Component {
  constructor (props) {
    super(props)

    this.state = {
      author: '',
      books: []
    }
  }

  componentDidMount () {
    Data.authors()
      .then(data => {
        let authorId = this.props.match.params.id
        console.log(authorId)
        let author = data.authors[authorId]
        this.setState({
          author: author,
          books: author.books
        })
      })
  }

  render () {
    let author = this.state.author
    let books = this.state.books
    books = books.map((b, i) => <div key={i}>...{b}</div>)

    return (
      <div className='book-container'>
        <h3>{author.name}</h3>
        <img src={author.image} width='350' height='300' />
        <div className='books'>
          books
          {books}
        </div>
      </div>
    )
  }
}

export default AuthorDetails
