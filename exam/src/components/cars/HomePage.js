import React, { Component } from 'react'
import queryString from 'query-string'
import carActions from '../../actions/CarActions'
import carStore from '../../stores/CarStore'
import CarListing from './CarListing'
import SearchForm from './SearchForm'

class ListCarsPage extends Component {
  constructor (props) {
    super(props)

    let query = queryString.parse(this.props.location.search)
    const page = parseInt(query.page, 10) || 1
    const search = query.search || ''

    this.state = {
      cars: [],
      stats: [],
      page: page,
      search: search
    }

    this.handleCarsFetching = this.handleCarsFetching.bind(this)
    this.handleStatsFetching = this.handleStatsFetching.bind(this)

    carStore.on(carStore.eventTypes.CARS_FETCHED, this.handleCarsFetching)
    carStore.on(carStore.eventTypes.STATS_FETCHED, this.handleStatsFetching)
  }

  handleCarsFetching (data) {
    this.setState({
      cars: data
    })
  }

  handleStatsFetching (data) {
    this.setState({
      stats: data
    })
  }

  componentWillUnmount () {
    carStore.removeListener(carStore.eventTypes.CARS_FETCHED, this.handleCarsFetching)
    carStore.removeListener(carStore.eventTypes.STATS_FETCHED, this.handleStatsFetching)
  }

  componentDidMount () {
    carActions.all(this.state.page, this.state.search)
    carActions.allStats()
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

    carActions.all(page, this.state.search)

    this.props.history.push(`/?page=${page}&search=${this.state.search}`)
  }

  goToNextPage () {
    if (this.state.cars.length === 0) {
      return
    }

    let page = this.state.page
    page += 1

    this.setState({
      page
    })

    carActions.all(page, this.state.search)

    this.props.history.push(`/?page=${page}&search=${this.state.search}`)
  }

  handleSearchChange (event) {
    this.setState({
      search: event.target.value
    })
  }

  handleSearchForm (event) {
    event.preventDefault()

    carActions.all(this.state.search, this.state.search)
    this.props.history.push(`/?page=${this.state.page}&search=${this.state.search}`)
  }

  render () {
    let cars = 'No cars found.'
    if (this.state.cars.length > 0) {
      cars = this.state.cars.map((car, index) => {
        return (
          <CarListing key={car.id} {...car} />
        )
      })
    }
    return (
      <div>
        <div>
          <p>Total Users: {this.state.stats.users}</p>
          <p>Total Cars: {this.state.stats.cars}</p>
          <SearchForm value={this.state.search} onChange={this.handleSearchChange.bind(this)} onSave={this.handleSearchForm.bind(this)} />
        </div>
        <h1>All Cars</h1>
        <ul>
          {cars}
        </ul>
        <div>
          <button onClick={this.goToPrevPage.bind(this)}>Prev</button>
          <button onClick={this.goToNextPage.bind(this)}>Next</button>
        </div>
      </div>
    )
  }
}

export default ListCarsPage
