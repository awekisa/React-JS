import React from 'react'
import Input from '../common/Input'

const SearchForm = (props) => (
  <form>
    <div>{props.error}</div>
    <Input
      name='search'
      placeholder='Search'
      value={props.value}
      onChange={props.onChange} />
    <br />
    <input type='submit' onClick={props.onSave} value='Search' />
  </form>
)

export default SearchForm
