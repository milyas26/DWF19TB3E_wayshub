import React from 'react'
import { Link } from 'react-router-dom'
import './Channel.css'

const Channel = ({ image, label }) => {
  return (
    <Link className="channel-link">
      <div className="channel">
        <img src={image} alt="Channel" />
        <p>{label}</p>
      </div>
    </Link>
  )
}

export default Channel
