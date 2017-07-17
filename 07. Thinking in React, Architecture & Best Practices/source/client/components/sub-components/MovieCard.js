import React from 'react'
import { Link } from 'react-router'
import Helpers from '../../../server/utilities/Helpers'
import MovieInfo from './MovieInfo'

export default class MovieCard extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showVotePanel: false,
      showCommentsPanel: false
    }
  }

  toggleCommentsPanel () {
    this.setState(prevState => ({
      showCommentsPanel: !prevState.showCommentsPanel,
      showVotePanel: false
    }))
  }

  toggleVotePanel () {
    this.setState(prevState => ({
      showCommentsPanel: false,
      showVotePanel: !prevState.showVotePanel
    }))
  }

  render () {
    let nodes = Helpers.nodesMovieCard(
      this.state,
      this.props,
      this.toggleCommentsPanel.bind(this),
      this.toggleVotePanel.bind(this)
    )

    return (
      <div className='animated fadeIn'>
        <div className='media movie'>
          <span className='position pull-left'>{this.props.index + 1}</span>
          <div className='pull-left thumb-lg'>
            {nodes.poster}
          </div>
          <MovieInfo movie={this.props.movie} />
          {nodes.panelToggles}
        </div>
        {nodes.votePanel}
        {nodes.commentsPanel}
        <div id='clear' />
      </div>
    )
  }
}
