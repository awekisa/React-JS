import React, {Component} from 'react'
import carActions from '../../actions/CarActions'
import CarStore from '../../stores/CarStore'
import PrivateCarListing from './PrivateCarListing'
import toastr from 'toastr'

class ProfilePage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      cars: []
    }

    this.handleMineCarsFetched = this.handleMineCarsFetched.bind(this)
    this.handleCarDeletion = this.handleCarDeletion.bind(this)

    CarStore.on(CarStore.eventTypes.MINE_CARS_FETCHED, this.handleMineCarsFetched)
    CarStore.on(CarStore.eventTypes.CAR_DELETED, this.handleCarDeletion)
  }

  componentDidMount () {
    carActions.allMineCars()
  }

  componentWillUnmount () {
    CarStore.removeListener(CarStore.eventTypes.MINE_CARS_FETCHED, this.handleMineCarsFetched)
    CarStore.removeListener(CarStore.eventTypes.CAR_DELETED, this.handleCarDeletion)
  }

  handleMineCarsFetched (data) {
    this.setState({
      cars: data
    })
  }

  handleCarDeletion (data) {
    console.log(data)
    toastr.success('Car deleted')
    carActions.allMineCars()
  }

  render () {
    let cars = 'No cars found.'
    if (this.state.cars.length > 0) {
      cars = this.state.cars.map((car, index) => {
        return (
          <PrivateCarListing key={car.id} {...car} />
        )
      })
    }
    return (
      <div>
        <h1>All Cars</h1>
        <ul>
          {cars}
        </ul>
      </div>
    )
  }
}

export default ProfilePage
