import React from 'react'
import './Input.css'

const Input = ({ label, height, ...rest }) => {
  return (
    <div className="input-wrapper">
      <input {...rest} className="input" style={{ height: height }} />
    </div>
  )
}

export default Input
