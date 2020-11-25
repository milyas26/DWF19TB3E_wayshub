import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

const Button = ({ title, isSmall, onClick, type, icon }) => {
  const className = []
  if (isSmall) className.push('btn-sm')
  if (type === 'add') {
    return (
      <Link className="button-link">
        <div className="btn-add">
          <img src={icon} alt="icon" />
          <p className="add" onClick={onClick}>
            {title}
          </p>
        </div>
      </Link>
    )
  }
  return (
    <button onClick={onClick} className={['button', className].join(' ')}>
      {title}
    </button>
  )
}

export default Button
