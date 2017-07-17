import React, { Component } from 'react'
import queryString from 'query-string'
import hotelActions from '../../actions/HotelAction'
import hotelStore from '../../stores/HotelStore'
import HotelListing from './HotelListing'

class LisHotelsPage extends Component {
  constructor (props) {
    super(props)

    let query = queryString.parse(this.props.location.search)
    const page = parseInt(query.page, 10) || 1

    this.state = {
      hotels: [],
      page: page
    }

    this.handleHotelsFetching = this.handleHotelsFetching.bind(this)

    hotelStore.on(hotelStore.eventTypes.HOTELS_FETCHED, this.handleHotelsFetching)
  }

  handleHotelsFetching (data) {
    this.setState({
      hotels: data
    })
  }

  componentWillUnmount () {
    hotelStore.removeListener(hotelStore.eventTypes.HOTELS_FETCHED, this.handleHotelsFetching)
  }

  componentDidMount () {
    hotelActions.all(this.state.page)
  }

  goToPrevPage () {
    let page = this.state.page
    page--
    if (page < 1) {
      page = 1
    }
    this.setState({
      page
    })

    hotelActions.all(page)

    this.props.history.push(`/?page=${page}`)
  }

  goToNextPage () {
    if (this.state.hotels.length === 0) {
      return
    }

    let page = this.state.page
    page += 1

    this.setState({
      page
    })

    hotelActions.all(page)

    this.props.history.push(`/?page=${page}`)
  }

  render () {
    let hotels = 'No hotels found.'
    if (this.state.hotels.length > 0) {
      hotels = this.state.hotels.map((hotel, index) => {
        return (
          <HotelListing key={hotel.id} {...hotel} />
        )
      })
    }
    return (
      <div>
        <h1>All Hotels</h1>
        <ul>
          {hotels}
        </ul>
        <div>
          <button onClick={this.goToPrevPage.bind(this)}>Prev</button>
          <button onClick={this.goToNextPage.bind(this)}>Next</button>
        </div>
      </div>
    )
  }
}

export default LisHotelsPage
