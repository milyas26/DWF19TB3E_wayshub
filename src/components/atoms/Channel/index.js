import React from 'react'
import './Channel.css'

const Channel = ({ image, label }) => {
  return (
    <div className="channel">
      <img src={image} alt="Channel" />
      <p>{label}</p>
    </div>
  )
}

export default Channel
