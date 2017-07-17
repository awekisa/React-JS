import React, { Component } from 'react'
import CreateCarForm from './CreateCarForm'
import FormHelpers from '../common/FormHelpers'
import carActions from '../../actions/CarActions'
import CarStore from '../../stores/CarStore'
import Auth from '../users/Auth'
import toastr from 'toastr'

class CreateHotelPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      car: {
        make: '',
        model: '',
        year: '',
        engine: '',
        price: '',
        image: '',
        mileage: ''
      },
      error: ''
    }

    this.handleCarCreation = this.handleCarCreation.bind(this)

    CarStore.on(
      CarStore.eventTypes.CAR_CREATED,
      this.handleCarCreation
    )
  }

  componentWillMount () {
    if (!Auth.isUserAuthenticated()) {
      this.props.history.push('/users/login')
    }
  }

  componentWillUnmount () {
    CarStore.removeListener(
      CarStore.eventTypes.CAR_CREATED,
      this.handleCarCreation
    )
  }

  handleCarCreation (data) {
    if (!data.success) {
      let firstError = FormHelpers.getFirstError(data)

      this.setState({
        error: firstError
      })
    } else {
      toastr.success(data.message)
      this.props.history.push(`/cars/details/${data.car.id}`)
    }
  }

  handleCarChange (event) {
    FormHelpers.handleFormChange.bind(this)(event, 'car')
  }

  handleCarForm (event) {
    event.preventDefault()

    // validate form
    let formIsValid = true
    let error = ''
    if (!this.state.car.image || typeof this.state.car.image !== 'string' || this.state.car.image.length <= 0) {
      error = 'Please provide valid Url!'
      formIsValid = false
    }
    if (!this.state.car.price || typeof Number(this.state.car.price) !== 'number' || Number(this.state.car.price) <= 0) {
      error = 'Price must be positive number.'
      formIsValid = false
    }
    if (!this.state.car.engine || typeof this.state.car.engine !== 'string' || !this.state.car.engine.length > 0) {
      error = 'Please provide Engine.'
      formIsValid = false
    }
    if (!this.state.car.year || typeof Number(this.state.car.year) !== 'number' || Number(this.state.car.year) < 1950 || Number(this.state.car.year) > 2050) {
      error = 'Year must be a number between 1950 and 2050.'
      formIsValid = false
    }
    if (!this.state.car.model || typeof this.state.car.model !== 'string' || !this.state.car.model.length > 0) {
      error = 'Please provide model.'
      formIsValid = false
    }
    if (!this.state.car.make || typeof this.state.car.make !== 'string' || !this.state.car.make.length > 0) {
      error = 'Please provide Make.'
      formIsValid = false
    }

    if (!formIsValid) {
      this.setState({error})
      return
    }
    carActions.create(this.state.car)
  }

  render () {
    return (
      <div>
        <h1>Add new car</h1>
        <CreateCarForm
          car={this.state.car}
          error={this.state.error}
          onChange={this.handleCarChange.bind(this)}
          onSave={this.handleCarForm.bind(this)}
        />
      </div>
    )
  }
}

export default CreateHotelPage
