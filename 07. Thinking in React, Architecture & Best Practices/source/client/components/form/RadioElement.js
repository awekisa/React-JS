import React, {Component} from 'react'

class RadioElement extends Component {
  render () {
    return (
      <div className='radio radio-inline'>
        <input type='radio'
          name={this.props.groupName}
          id={this.props.value.toLowerCase()}
          value={this.props.value}
          checked={this.props.selectedValue === this.props.value}
          onChange={this.props.handleChange} />
        <label htmlFor={this.props.value.toLowerCase()}>{this.props.value}</label>
      </div>
    )
  }
}

export default RadioElement
