import React, {Component} from 'react'
import TodoActions from '../actions/TodoActions'

class Todo extends Component {
  handleClick (event) {
    TodoActions.deleteTodo(this.props.id)
  }

  todoDone () {
    TodoActions.completeTodo(this.props.id)
  }

  render () {
    return (
      <li>
        {this.props.title} - {this.props.completed ? 'DONE' : <button onClick={this.todoDone.bind(this)}>PENDING'</button>}
        <button onClick={this.handleClick.bind(this)}>DELETE</button>
      </li>
    )
  }
}

export default Todo
