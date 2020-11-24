import React from 'react'
import './Button.css'

const Button = ({ title, isSmall, onClick }) => {
  const className = []
  if (isSmall) className.push('btn-sm')
  return (
    <button onClick={onClick} className={['button', className].join(' ')}>
      {title}
    </button>
  )
}

export default Button
