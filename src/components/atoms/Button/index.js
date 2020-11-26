import React from 'react'
import './Button.css'

const Button = ({ title, isSmall, onClick, type, icon, isAddVideo }) => {
  const className = []
  if (isSmall) className.push('btn-sm')
  if (type === 'add') {
    return (
      <div className="btn-add">
        <img src={icon} alt="icon" />
        <p
          className="add"
          onClick={onClick}
          style={{ color: isAddVideo ? '#ff7a00' : '#fff' }}
        >
          {title}
        </p>
      </div>
    )
  }
  return (
    <button onClick={onClick} className={['button', className].join(' ')}>
      {title}
    </button>
  )
}

export default Button
