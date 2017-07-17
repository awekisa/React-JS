import {EventEmitter} from 'events'
import dispatcher from '../dispatcher'

class TodoStore extends EventEmitter {
  constructor () {
    super()

    this.todos = [
      {id: 1, title: 'Go shopping', completed: false},
      {id: 2, title: 'Go walking', completed: false}
    ]
  }

  getAll () {
    return new Promise((resolve, reject) => {
      resolve(this.todos.slice(0))
    })
  }

  createTodo (title) {
    const id = this.todos.length + 1
    this.todos.push({
      id, title, completed: false
    })

    this.emit('change')
  }

  deleteTodo (id) {
    console.log('deleteTodo id = ' + id)
    this.todos = this.todos.filter(t => {
      console.log(t.id + '---' + id)
      return t.id !== id
    })

    this.emit('change')
  }

  completeTodo (id) {
    const todo = this.todos.find(todo => todo.id === id)
    todo.completed = true

    this.emit('change')
  }

  handleAction (action) {
    switch (action.type) {
      case 'CREATE_TODO': {
        this.createTodo(action.title)
        break
      }
      case 'DELETE_TODO': {
        this.deleteTodo(action.id)
        break
      }
      case 'COMPLETE_TODO': {
        this.completeTodo(action.id)
        break
      }
      default: {
        throw new Error('Invalid Action Type')
      }
    }
  }
}

let todoStore = new TodoStore()

dispatcher.register(todoStore.handleAction.bind(todoStore))

export default todoStore
