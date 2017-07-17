import React from 'react'
import Input from '../common/Input'

const HotelReviewForm = (props) => (
  <form>
    <div>{props.error}</div>
    <Input
      type='number'
      name='rating'
      placeholder='Rating'
      value={props.review.rating}
      onChange={props.onChange} />
    <Input
      name='comment'
      placeholder='Comment'
      value={props.review.comment}
      onChange={props.onChange} />
    <input type='submit' onClick={props.onSave} value='Add review' />
  </form>
)

export default HotelReviewForm
