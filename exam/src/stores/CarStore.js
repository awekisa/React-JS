import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import CarData from '../data/CarData'
import carActions from '../actions/CarActions'

class HotelStore extends EventEmitter {
  allStats () {
    CarData
      .allStats()
      .then(data => this.emit(this.eventTypes.STATS_FETCHED, data))
  }
  create (car) {
    CarData
      .create(car)
      .then(data => this.emit(this.eventTypes.CAR_CREATED, data))
  }

  all (page, search) {
    page = page || 1

    CarData
      .all(page, search)
      .then(data => this.emit(this.eventTypes.CARS_FETCHED, data))
  }

  getById (id) {
    CarData
      .getById(id)
      .then(data => this.emit(this.eventTypes.CAR_DETAILS_FETCHED, data))
  }

  addReview (id, review) {
    CarData
      .addReview(id, review)
      .then(data => this.emit(this.eventTypes.REVIEW_ADDED, data))
  }

  getAllReviews (id) {
    CarData
      .getAllReviews(id)
      .then(data => this.emit(this.eventTypes.REVIEWS_FETCHED, data))
  }

  like (id) {
    CarData
      .like(id)
      .then(data => this.emit(this.eventTypes.CAR_LIKED, data))
  }

  getMineCars () {
    CarData
      .getMineCars()
      .then(data => this.emit(this.eventTypes.MINE_CARS_FETCHED, data))
  }

  deleteCar (id) {
    CarData
      .deleteCar(id)
      .then(data => this.emit(this.eventTypes.CAR_DELETED, data))
  }

  handleAction (action) {
    switch (action.type) {
      case carActions.types.ALL_STATS: {
        this.allStats()
        break
      }
      case carActions.types.CREATE_CAR: {
        this.create(action.car)
        break
      }
      case carActions.types.ALL_CARS: {
        this.all(action.page, action.search)
        break
      }
      case carActions.types.DETAILS_CAR: {
        this.getById(action.id)
        break
      }
      case carActions.types.ADD_REVIEW: {
        this.addReview(action.id, action.review)
        break
      }
      case carActions.types.GET_ALL_REVIEWS: {
        this.getAllReviews(action.id)
        break
      }
      case carActions.types.LIKE: {
        this.like(action.id)
        break
      }
      case carActions.types.GET_MINE_CARS: {
        this.getMineCars()
        break
      }
      case carActions.types.DELETE_CAR: {
        this.deleteCar(action.id)
        break
      }
      default: break
    }
  }
}

let hotelStore = new HotelStore()

hotelStore.eventTypes = {
  CAR_CREATED: 'car_created',
  CARS_FETCHED: 'cars_fetched',
  CAR_DETAILS_FETCHED: 'car_details_fetched',
  REVIEW_ADDED: 'review_added',
  REVIEWS_FETCHED: 'reviews_fetched',
  CAR_LIKED: 'car_liked',
  MINE_CARS_FETCHED: 'mine_cars_fetched',
  CAR_DELETED: 'car_deleted'
}

dispatcher.register(hotelStore.handleAction.bind(hotelStore))

export default hotelStore
