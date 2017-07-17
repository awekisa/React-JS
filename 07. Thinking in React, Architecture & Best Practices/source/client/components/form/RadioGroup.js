import React, {Component} from 'react'

class RadioGroup extends Component {
  render () {
    return (
      <div className={`form-group ${this.props.validationState}`}>
        <span className='help-block'>{this.props.message}</span>
        {this.props.children}
      </div>
    )
  }
}

export default RadioGroup
