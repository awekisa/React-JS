import React from 'react'
import { Link } from 'react-router'
import MovieActions from '../actions/MovieActions'
import MovieStore from '../stores/MovieStore'

export default class Footer extends React.Component {
  constructor (props) {
    super(props)
    this.state = MovieStore.getState()

    this.onChange = this.onChange.bind(this)
  }

  onChange (state) {
    this.setState(state)
  }

  componentDidMount () {
    MovieStore.listen(this.onChange)

    MovieActions.getFiveRecentMovies()
    this.interval = setInterval(() => MovieActions.getFiveRecentMovies(), 30000)
  }

  componentWillUnmount () {
    MovieStore.unlisten(this.onChange)
    clearInterval(this.interval)
  }

  render () {
    let mostRecentMovies = this.state.mostRecentMovies.map(movie => {
      return (
        <li key={movie._id}>
          <Link to={`/...`}>{movie.name}</Link>
        </li>
      )
    })

    return (
      <footer>
        <div className='cotainer'>
          <div className='row'>
            <div className='col-sm-5'>
              <h3 className='lead'>
                <strong>Information</strong>
                <strong>Copyright</strong>
              </h3>
              <p>
                Powered by
                <strong> Express, </strong>
                <strong> MOngoDB</strong> and
                <strong> React</strong>
              </p>
              <p>@2017 Softuni.</p>
            </div>
            <div className='col-sm-4 hidden-xs'>
              <h3 className='lead'>
                <strong>Newest</strong> 4 Movies
              </h3>
              <ul className='list-inline'>
                {mostRecentMovies}
              </ul>
            </div>
            <div className='col-sm-3'>
              <h3 className='lead'>Author</h3>
              <a href='https://abv.bg'>
                <strong>Something meaningful</strong>
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
