import React from 'react'
import './Comments.css'

const Comments = ({ image, text }) => {
  return (
    <div className="comments">
      <img src={image} alt="" />
      <p>{text}</p>
    </div>
  )
}

export default Comments
