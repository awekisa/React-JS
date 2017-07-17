import React, { Component } from 'react'
import CreateHotelForm from './CreateHotelForm'
import FormHelpers from '../common/FormHelpers'
import HotelActions from '../../actions/HotelAction'
import HotelStore from '../../stores/HotelStore'
import Auth from '../users/Auth'
import toastr from 'toastr'

class CreateHotelPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hotel: {
        name: 'Hilton Hotel',
        image: 'https://holycity.org/wp-content/uploads/2012/11/HiltonSchipholFacade_HR.jpg',
        location: 'Varna',
        description: 'Best hotel on the seacoast',
        numberOfRooms: 15,
        parkingSlots: 300
      },
      error: ''
    }

    this.handleHotelCreation = this.handleHotelCreation.bind(this)

    HotelStore.on(
      HotelStore.eventTypes.HOTEL_CREATED,
      this.handleHotelCreation
    )
  }

  componentWillMount () {
    if (!Auth.isUserAuthenticated()) {
      this.props.history.push('/users/login')
    }
  }

  componentWillUnmount () {
    HotelStore.removeListener(
      HotelStore.eventTypes.HOTEL_CREATED,
      this.handleHotelCreation
    )
  }

  handleHotelCreation (data) {
    if (!data.success) {
      let firstError = FormHelpers.getFirstError(data)

      this.setState({
        error: firstError
      })
    } else {
      toastr.success(data.message)
      this.props.history.push(`/hotels/details/${data.hotel.id}`)
    }
  }

  handleHotelChange (event) {
    FormHelpers.handleFormChange.bind(this)(event, 'hotel')
  }

  handleHotelForm (event) {
    event.preventDefault()

    // validate form
    let formIsValid = true
    let error = ''
    if (!this.state.hotel.numberOfRooms || typeof this.state.hotel.numberOfRooms !== 'number' || this.state.hotel.numberOfRooms < 0) {
      error = 'Number of rooms must be a positive number..'
      formIsValid = false
    }
    if (!this.state.hotel.description || typeof this.state.hotel.description !== 'string' || this.state.hotel.description.length <= 10) {
      error = 'Description must be more than 10 symbols.'
      formIsValid = false
    }
    if (!this.state.hotel.image || typeof this.state.hotel.image !== 'string' || !this.state.hotel.image.length > 0) {
      error = 'Provide valid url.'
      formIsValid = false
    }
    if (!this.state.hotel.name || this.state.hotel.name.length < 3) {
      error = 'Name must be more than 3 symbols.'
      formIsValid = false
    }

    if (!formIsValid) {
      this.setState({error})
      return
    }
    HotelActions.create(this.state.hotel)
  }

  render () {
    return (
      <div>
        <h1>Add new hotel</h1>
        <CreateHotelForm
          hotel={this.state.hotel}
          error={this.state.error}
          onChange={this.handleHotelChange.bind(this)}
          onSave={this.handleHotelForm.bind(this)}
        />
      </div>
    )
  }
}

export default CreateHotelPage
