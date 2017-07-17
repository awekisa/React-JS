import React, {Component} from 'react'
import FormHelpers from '../common/FormHelpers'
import toastr from 'toastr'
import HotelReviewForm from './HotelReviewForm'
import hotelActions from '../../actions/HotelAction'
import HotelStore from '../../stores/HotelStore'

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

    HotelStore.on(HotelStore.eventTypes.REVIEWS_FETCHED, this.handleReviewsRetrieved)
    HotelStore.on(HotelStore.eventTypes.REVIEW_ADDED, this.handleReviewAdded)
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
      hotelActions.getAllReviews(this.props.hotelId)
    }
  }

  componentDidMount () {
    hotelActions.getAllReviews(this.props.hotelId)
  }

  componentWillUnmount () {
    HotelStore.removeListener(HotelStore.eventTypes.REVIEWS_FETCHED, this.handleReviewsRetrieved)
    HotelStore.removeListener(HotelStore.eventTypes.REVIEW_ADDED, this.handleReviewAdded)
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

    hotelActions.addReview(this.props.hotelId, this.state.newReview)
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
        <HotelReviewForm
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
