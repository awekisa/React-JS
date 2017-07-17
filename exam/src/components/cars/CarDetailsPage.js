import React, {Component} from 'react'
import carActions from '../../actions/CarActions'
import CarStore from '../../stores/CarStore'
import CarReviews from '../reviews/CarReviews'
import toastr from 'toastr'

class CarDetailsPage extends Component {
  constructor (props) {
    super(props)

    const id = this.props.match.params.id

    this.state = {
      id,
      car: {},
      error: ''
    }

    this.handleCarRetrieved = this.handleCarRetrieved.bind(this)
    this.handleCarLiked = this.handleCarLiked.bind(this)

    CarStore.on(CarStore.eventTypes.CAR_DETAILS_FETCHED, this.handleCarRetrieved)
    CarStore.on(CarStore.eventTypes.CAR_LIKED, this.handleCarLiked)
  }

  handleCarRetrieved (car) {
    this.setState({car})
  }

  componentDidMount () {
    carActions.getById(this.state.id)
  }

  componentWillUnmount () {
    CarStore.removeListener(CarStore.eventTypes.CAR_DETAILS_FETCHED, this.handleCarRetrieved)
    CarStore.removeListener(CarStore.eventTypes.CAR_LIKED, this.handleCarLiked)
  }

  handleLikeBtnClick (event) {
    event.preventDefault()

    carActions.like(this.state.id)
  }

  handleCarLiked (data) {
    if (!data.success) {
      this.setState({
        error: data.message
      })
    } else {
      let car = this.state.car
      car.likes = car.likes + 1
      toastr.success('Thanks!')
      this.setState({car})
    }
  }

  render () {
    const car = this.state.car
    const button = <button onClick={this.handleLikeBtnClick.bind(this)}>Like</button>
    const error = this.state.error

    return (
      <div>
        <h1>{car.make} - {car.engine}</h1>
        <img className='car-details-image' src={car.image} alt={car.make} />
        <h2>Year - {car.year}</h2>
        <h2>Price - {car.price}</h2>
        <h3>Mileage - {car.mileage}</h3>
        <h3>Likes - {car.likes}</h3>
        <h3>{error}</h3>
        {button}
        <CarReviews carId={this.state.id} />
      </div>
    )
  }
}

export default CarDetailsPage
