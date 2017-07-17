import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import HotelData from '../data/HotelData'
import hotelActions from '../actions/HotelAction'

class HotelStore extends EventEmitter {
  create (hotel) {
    HotelData
      .create(hotel)
      .then(data => this.emit(this.eventTypes.HOTEL_CREATED, data))
  }

  all (page) {
    page = page || 1

    HotelData
      .all(page)
      .then(data => this.emit(this.eventTypes.HOTELS_FETCHED, data))
  }

  getById (id) {
    HotelData
      .getById(id)
      .then(data => this.emit(this.eventTypes.HOTEL_DETAILS_FETCHED, data))
  }

  addReview (id, review) {
    HotelData
      .addReview(id, review)
      .then(data => this.emit(this.eventTypes.REVIEW_ADDED, data))
  }

  getAllReviews (id) {
    HotelData
      .getAllReviews(id)
      .then(data => this.emit(this.eventTypes.REVIEWS_FETCHED, data))
  }

  handleAction (action) {
    switch (action.type) {
      case hotelActions.types.CREATE_HOTEL: {
        this.create(action.hotel)
        break
      }
      case hotelActions.types.ALL_HOTELS: {
        this.all(action.page)
        break
      }
      case hotelActions.types.DETAILS_HOTEL: {
        this.getById(action.id)
        break
      }
      case hotelActions.types.ADD_REVIEW: {
        this.addReview(action.id, action.review)
        break
      }
      case hotelActions.types.GET_ALL_REVIEWS: {
        this.getAllReviews(action.id)
        break
      }
      default: break
    }
  }
}

let hotelStore = new HotelStore()

hotelStore.eventTypes = {
  HOTEL_CREATED: 'hotel_created',
  HOTELS_FETCHED: 'hotels_fetched',
  HOTEL_DETAILS_FETCHED: 'hotel_details_fetched',
  REVIEW_ADDED: 'review_added',
  REVIEWS_FETCHED: 'reviews_fetched'
}

dispatcher.register(hotelStore.handleAction.bind(hotelStore))

export default hotelStore
