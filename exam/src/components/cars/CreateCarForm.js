import React from 'react'
import Input from '../common/Input'

const CreateCarForm = (props) => (
  <form>
    <div>{props.error}</div>
    <Input
      name='make'
      placeholder='Make'
      value={props.car.make}
      onChange={props.onChange} />
    <br />
    <Input
      name='model'
      placeholder='Model'
      value={props.car.model}
      onChange={props.onChange} />
    <br />
    <Input
      type='number'
      name='year'
      placeholder='Year'
      value={props.car.year}
      onChange={props.onChange} />
    <br />
    <Input
      name='engine'
      placeholder='Engine'
      value={props.car.engine}
      onChange={props.onChange} />
    <br />
    <Input
      type='number'
      name='price'
      placeholder='Price'
      value={props.car.price}
      onChange={props.onChange} />
    <br />
    <Input
      type='url'
      name='image'
      placeholder='Image Url'
      value={props.car.image}
      onChange={props.onChange} />
    <br />
    <Input
      type='number'
      name='mileage'
      placeholder='Mileage'
      value={props.car.mileage}
      onChange={props.onChange} />
    <br />
    <input type='submit' onClick={props.onSave} />
  </form>
)

export default CreateCarForm
