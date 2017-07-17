import React from 'react'
import { Link } from 'react-router-dom'

const HotelListing = (props) => (
  <li className='hotel' key={props.id}>
    <div>{props.name} - {props.location}</div>
    <img src={props.image} alt={props.description} />
    <div><Link to={`/hotels/details/${props.id}`}>Details</Link></div>
    <div><Link to={`/hotels/create`}>Create</Link></div>
  </li>
  )

export default HotelListing
