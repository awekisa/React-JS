import React, {Component} from 'react'
import hotelActions from '../../actions/HotelAction'
import HotelStore from '../../stores/HotelStore'
import HotelReviews from '../reviews/HotelReviews'
import Auth from '../users/Auth'
import {Redirect} from 'react-router-dom'

class HotelDetailsPage extends Component {
  constructor (props) {
    super(props)

    const id = this.props.match.params.id

    this.state = {
      id,
      hotel: {}
    }

    this.handleHotelRetrieved = this.handleHotelRetrieved.bind(this)

    HotelStore.on(HotelStore.eventTypes.HOTEL_DETAILS_FETCHED, this.handleHotelRetrieved)
  }

  handleHotelRetrieved (hotel) {
    this.setState({hotel})
  }

  componentDidMount () {
    hotelActions.getById(this.state.id)
  }

  componentWillUnmount () {
    HotelStore.removeListener(HotelStore.eventTypes.HOTEL_DETAILS_FETCHED, this.handleHotelRetrieved)
  }

  render () {
    const hotel = this.state.hotel
    return (
      <div>
        <h1>{hotel.name} - {hotel.location}</h1>
        <img className='hotel-details-image' src={hotel.image} alt={hotel.description} />
        <h2>{hotel.description}</h2>
        <h3>Number of Rooms - {hotel.numberOfRooms}</h3>
        <h3>Parking Slots - {hotel.parkingSlots}</h3>
        <HotelReviews hotelId={this.state.id} />
      </div>
    )
  }
}

export default HotelDetailsPage
