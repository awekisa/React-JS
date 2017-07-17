import React, {Component} from 'react'
import FormHelpers from '../common/FormHelpers'
import toastr from 'toastr'
import CarReviewForm from './CarReviewForm'
import carActions from '../../actions/CarActions'
import CarStore from '../../stores/CarStore'

class HotelReviews extends Component {
  constructor (props) {
    super(props)

    this.state = {
      newReview: {
        rating: '',
        comment: ''
      },
      reviews: [],
      error: ''
    }

    this.handleReviewsRetrieved = this.handleReviewsRetrieved.bind(this)
    this.handleReviewAdded = this.handleReviewAdded.bind(this)

    CarStore.on(CarStore.eventTypes.REVIEWS_FETCHED, this.handleReviewsRetrieved)
    CarStore.on(CarStore.eventTypes.REVIEW_ADDED, this.handleReviewAdded)
  }

  handleReviewsRetrieved (data) {
    this.setState({reviews: data})
  }

  handleReviewAdded (data) {
    if (!data.success) {
      let firstError = FormHelpers.getFirstError(data)

      this.setState({
        error: firstError
      })
    } else {
      toastr.success(data.message)
      carActions.getAllReviews(this.props.carId)
    }
  }

  componentDidMount () {
    carActions.getAllReviews(this.props.carId)
  }

  componentWillUnmount () {
    CarStore.removeListener(CarStore.eventTypes.REVIEWS_FETCHED, this.handleReviewsRetrieved)
    CarStore.removeListener(CarStore.eventTypes.REVIEW_ADDED, this.handleReviewAdded)
  }

  handleReviewChange (event) {
    FormHelpers.handleFormChange.bind(this)(event, 'newReview')
  }

  handleReviewSave (event) {
    event.preventDefault()

    const rating = parseInt(this.state.newReview.rating, 10)

    if (!rating || rating < 1 || rating > 5) {
      this.setState({
        error: 'Rating must be between 1 and 5.'
      })
      return
    }

    carActions.addReview(this.props.carId, this.state.newReview)
  }

  render () {
    let reviews = ''
    if (this.state.reviews.length > 0) {
      reviews = this.state.reviews.map((review, i) => {
        return <div key={i}>{review.user} - {review.rating} - {review.comment}</div>
      })
    }

    return (
      <div>
        <h4>Share Your Opinion</h4>
        <CarReviewForm
          review={this.state.newReview}
          error={this.state.error}
          onChange={this.handleReviewChange.bind(this)}
          onSave={this.handleReviewSave.bind(this)} />
        <div>
          {reviews}
        </div>
      </div>

    )
  }
}

export default HotelReviews
