import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import carActions from '../../actions/CarActions'

class PrivateCarListing extends Component {
  deleteCar () {
    carActions.deleteCar(this.props.id)
  }

  render () {
    return (
      <li className='car' key={this.props.id}>
        <div>{this.props.make} - {this.props.year}</div>
        <img src={this.props.image} alt={this.props.make} />
        <div><Link to={`/cars/details/${this.props.id}`}>Details</Link></div>
        <button onClick={this.deleteCar.bind(this)}>DELETE</button>
      </li>
    )
  }
}

export default PrivateCarListing
