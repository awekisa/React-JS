import dispatcher from '../dispatcher'

const hotelActions = {
  types: {
    CREATE_HOTEL: 'CREATE_HOTEL',
    ALL_HOTELS: 'ALL_HOTELS',
    DETAILS_HOTEL: 'DETAILS_HOTEL',
    ADD_REVIEW: 'ADD_REVIEW',
    GET_ALL_REVIEWS: 'GET_ALL_REVIEWS'
  },
  create (hotel) {
    dispatcher.dispatch({
      type: this.types.CREATE_HOTEL,
      hotel
    })
  },
  all (page) {
    page = page || 1
    dispatcher.dispatch({
      type: this.types.ALL_HOTELS,
      page
    })
  },
  getById (id) {
    dispatcher.dispatch({
      type: this.types.DETAILS_HOTEL,
      id
    })
  },
  addReview (id, review) {
    dispatcher.dispatch({
      type: this.types.ADD_REVIEW,
      id,
      review
    })
  },
  getAllReviews (id) {
    dispatcher.dispatch({
      type: this.types.GET_ALL_REVIEWS,
      id
    })
  }
}

export default hotelActions
