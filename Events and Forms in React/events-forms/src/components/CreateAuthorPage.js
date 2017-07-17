import React, {Component} from 'react'
import AuthorForm from './AuthorForm'
import toastr from 'toastr'

class CreateAuthorPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      author: {
        firstName: '',
        lastName: ''
      },
      errors: {
        firstName: '',
        lastName: ''
      }
    }
  }

  handleInputChange (event) {
    const target = event.target
    const field = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value
    let author = this.state.author
    author[field] = value

    this.setState({author})
  }

  saveAuthor (event) {
    event.preventDefault()

    if (!this.validateAuthor()) {
      return
    }

    toastr.success('Author added.')
  }

  validateAuthor () {
    let author = this.state.author
    let errors = {}
    let formIsValid = true
    if (!author.firstName || author.firstName.length < 3) {
      errors.firstName = 'First Name should be minimum of 3 symbols!'
      formIsValid = false
    }
    if (!author.lastName || author.lastName.length < 3) {
      errors.lastName = 'Last Name should be minimum of 3 symbols!'
      formIsValid = false
    }
    this.setState({errors})
    return formIsValid
  }

  render () {
    return (
      <div>
        <h1>Create Author</h1>
        <AuthorForm
          author={this.state.author}
          errors={this.state.errors}
          onSave={this.saveAuthor.bind(this)}
          onChange={this.handleInputChange.bind(this)} />
      </div>
    )
  }
}

export default CreateAuthorPage
