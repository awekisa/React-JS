import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Data from '../Data'

class Books extends Component {
  constructor (props) {
    super(props)

    this.state = {
      authors: [],
      nameAscending: true
    }
    this.sortByName = this.sortByName.bind(this)
  }

  componentDidMount () {
    this.sortByName()
  }

  sortByName () {
    Data.authors()
      .then(data => {
        data.authors.sort((b1, b2) => {
          return b1.name.localeCompare(b2.name)
        })
        if (!this.state.nameAscending) {
          data.authors.reverse()
        }
        this.setState({
          authors: data.authors,
          nameAscending: !this.state.nameAscending
        })
      })
  }

  render () {
    let authors = this.state.authors
    authors = authors.map(a => {
      let detailsAddress = '/authors/' + (a.id - 1)
      return (
        <tr key={a.id}>
          <td>{a.name}</td>
          <td><img src={a.image} width='100' height='100' /></td>
          <td><Link to={detailsAddress}>click</Link></td>
        </tr>
      )
    })
    return (
      <table>
        <tbody>
          <tr>
            <th><button onClick={this.sortByName}>Name</button></th>
            <th><span>Image</span></th>
            <th><span>Details</span></th>
          </tr>
          {authors}
        </tbody>
      </table>
    )
  }
}

export default Books
