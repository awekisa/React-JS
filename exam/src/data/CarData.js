import Data from './Data'
const baseUrl = 'cars'

class ProductData {
  static allStats () {
    return Data.get(`stats`)
  }
  static create (car) {
    return Data.post(`${baseUrl}/create`, car, true)
  }
  static all (page, search) {
    page = page || 1
    return Data.get(`${baseUrl}/all?page=${page}&search=${search}`)
  }
  static getById (id) {
    return Data.get(`${baseUrl}/details/${id}`, true)
  }
  static addReview (id, review) {
    return Data.post(`${baseUrl}/details/${id}/reviews/create`, review, true)
  }
  static getAllReviews (id) {
    return Data.get(`${baseUrl}/details/${id}/reviews`, id, true)
  }
  static like (id) {
    return Data.post(`${baseUrl}/details/${id}/like`, {}, true)
  }
  static getMineCars () {
    return Data.get(`${baseUrl}/mine/`, true)
  }
  static deleteCar (id) {
    return Data.post(`${baseUrl}/delete/${id}`, {}, true)
  }
}

export default ProductData
