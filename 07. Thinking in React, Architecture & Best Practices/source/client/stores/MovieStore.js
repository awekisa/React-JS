import alt from '../alt'
import MovieActions from '../actions/MovieActions'

class MovieStore {
  constructor () {
    this.bindActions(MovieActions)
    this.topTenMovies = []
    this.mostRecentMovies = []
  }

  onAddCommentSuccess (data) {
    let comment = data.comment
    let movieId = data.comment.movie
    for (let i = 0; i < this.topTenMovies.length; i++) {
      if (this.topTenMovies[i]._id === movieId) {
        this.topTenMovies[i].comments.unshift(comment)
      }
    }
  }

  onAddVoteSuccess (data) {
    let movieId = data.movieId
    let loggedInUserScore = data.voteScore
    let movieScore = data.movieScore
    let movieVotes = data.movieVotes

    for (let movie of this.topTenMovies) {
      if (movie._id === movieId) {
        movie.loggedInUserScore = loggedInUserScore
        movie.score = movieScore
        movie.votes = movieVotes
        break
      }
    }
  }

  onAddMovieToTopTen (movie) {
    this.topTenMovies.push(movie)
  }

  onEmptyTopTenMoies () {
    this.topTenMovies = []
  }

  onGetTopTebMoviesFail (err) {
    console.log('Couldn\'t connect to DB!', err)
  }

  onGetFiveRecentMoviesSuccess (data) {
    this.mostRecentMovies = data
  }
  onGetFiveRecentMoviesFail (err) {
    console.log('Couldn\'t connect to DB!', err)
  }
}

export default alt.createStore(MovieStore)
