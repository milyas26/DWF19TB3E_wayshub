import React from 'react'
import './SidebarMenu.css'

const SidebarMenu = ({ icon, label, isActive }) => {
  const className = []
  if (isActive) className.push('active')
  return (
    <div className="wrapper-menu">
      <img src={icon} alt="Home Icon" />
      <p className={['label', className].join(' ')}>{label}</p>
    </div>
  )
}

export default SidebarMenu
