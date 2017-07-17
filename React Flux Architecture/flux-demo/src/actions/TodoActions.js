import dispatcher from '../dispatcher'

let todoActions = {
  createTodo: (title) => {
    dispatcher.dispatch({
      type: 'CREATE_TODO',
      title
    })
  },
  deleteTodo: (id) => {
    dispatcher.dispatch({
      type: 'DELETE_TODO',
      id
    })
  },
  completeTodo: (id) => {
    dispatcher.dispatch({
      type: 'COMPLETE_TODO',
      id
    })
  }
}

export default todoActions
