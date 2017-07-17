import React from 'react'
import { Link } from 'react-router-dom'

const CarListing = (props) => (
  <li className='car' key={props.id}>
    <div>{props.make} - {props.year}</div>
    <img src={props.image} alt={props.make} />
    <div><Link to={`/cars/details/${props.id}`}>Details</Link></div>
  </li>
  )

export default CarListing
