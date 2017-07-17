import alt from '../alt'
import MovieAddActions from '../actions/MovieAddActions'
import Helpers from '../../server/utilities/Helpers'

class MovieAddStore {
  constructor () {
    this.bindActions(MovieAddActions)

    this.name = ''
    this.description = ''
    this.genres = []
    this.moviePosterUrl = ''
    this.genresValidationState = ''
    this.nameValidationState = ''
    this.helpBlock = ''
  }

  onAddMovieSuccess () {
    console.log('Added movie!')
  }

  onAddMovieFail (err) {
    console.log('Failed to add movie', err)
  }

  onHandleNameChange (e) {
    // console.log(e)
    this.name = e.target.value
    this.nameValidationState = ''
    this.helpBlock = ''
  }

  onHandleDescriptionChange (e) {
    this.description = e.target.value
    this.genresValidationState = ''
    this.helpBlock = ''
  }
  onHandleGenresChange (e) {
    console.log(this.genres)
    let genreValue = e.target.value
    if (this.genres.indexOf(genreValue) === -1) {
      this.genres = Helpers.appendToArray(genreValue, this.genres)
    } else {
      this.genres = Helpers.removeFromArray(genreValue, this.genre)
    }
    this.genresValidationState = ''
    this.helpBlock = ''
  }

  onNameValidationFail () {
    this.nameValidationState = 'has-error'
    this.helpBlick = 'Enter mmovie name!'
  }

  onGenresValidationFail () {
    this.genresValidationState = 'has-error'
    this.helpBlock = 'Select atleast one movie genre!'
  }
}

export default alt.createStore(MovieAddStore)
