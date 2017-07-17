import React, { Component} from 'react'

import UserStore from '../stores/UserStore'

import UserInfo from './sub-components/UserInfo'
import UserRatedMovies from './sub-components/UserRatedMovies'
import UserReviews from './sub-components/UserReviews'

export default class UserProfile extends Component {
  constructor (props) {
    super(props)

    this.state = UserStore.getState()

    this.onChange = this.onChange.bind(this)
  }

  onChange (state) {
    this.setState(state)
  }

  componentDidMount () {
    UserStore.listen(this.onChange)
  }

  componentWillUnmount () {
    UserStore.unlisten(this.onChange)
  }

  render () {
    let nodes = {}
    nodes.roles = this.state.roles.map((role, index) => {
      return (
        <h4 key={index} className='lead'>
          <strong>{role}</strong>
        </h4>
      )
    })
    return (
      <div>
        <UserInfo roles={this.state.roles} information={this.state.information} />
        <UserRatedMovies />
        {/*<UserReviews reviews={[]} />*/}
        {/*<div className='container profile-container'>
          <div className='profile-stats clearfix'>
            <ul>
              <li>
                <span className='stats-number'>{this.state.votes}</span>Votes
              </li>
            </ul>
          </div>
          <div className='pull-right btn-group'>
            <a className='btn btn-primary' onClick={() => 5/* BS function */}
              {/*{this.state.showRateMovies ? 'Hide' : 'Rated movies'}*/}
            {/*</a>
          </div>
        </div>*/}
      </div>
    )
  }
}
