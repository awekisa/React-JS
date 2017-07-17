import React, {Component} from 'react'

class Child extends Component {
  render () {
    return (
      <div>
        <input type='text' name='someInput' onChange={this.props.inputChange} />
        <button onClick={this.props.onSubmit}>Submit</button>
      </div>
    )
  }
}

export default Child
