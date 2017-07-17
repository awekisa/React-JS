import dispatcher from '../dispatcher'

const carActions = {
  types: {
    ALL_STATS: 'ALL_STATS',
    CREATE_CAR: 'CREATE_CAR',
    ALL_CARS: 'ALL_CARS',
    DETAILS_CAR: 'DETAILS_CAR',
    ADD_REVIEW: 'ADD_REVIEW',
    GET_ALL_REVIEWS: 'GET_ALL_REVIEWS',
    LIKE: 'LIKE',
    GET_MINE_CARS: 'GET_MINE_CARS',
    DELETE_CAR: 'DELETE_CAR'
  },
  allStats () {
    dispatcher.dispatch({
      type: this.types.ALL_STATS
    })
  },
  create (car) {
    dispatcher.dispatch({
      type: this.types.CREATE_CAR,
      car
    })
  },
  all (page, search) {
    page = page || 1
    dispatcher.dispatch({
      type: this.types.ALL_CARS,
      page,
      search
    })
  },
  getById (id) {
    dispatcher.dispatch({
      type: this.types.DETAILS_CAR,
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
  },
  like (id) {
    dispatcher.dispatch({
      type: this.types.LIKE,
      id
    })
  },
  allMineCars () {
    dispatcher.dispatch({
      type: this.types.GET_MINE_CARS
    })
  },
  deleteCar (id) {
    dispatcher.dispatch({
      type: this.types.DELETE_CAR,
      id
    })
  }

}

export default carActions
