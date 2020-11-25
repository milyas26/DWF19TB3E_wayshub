import React from 'react'
import { Link } from 'react-router-dom'
import './SidebarMenu.css'

const SidebarMenu = ({ icon, label, isActive, onClick }) => {
  const className = []
  if (isActive) className.push('active')
  return (
    <Link className="link-sidebar-menu" onClick={onClick}>
      <div className="wrapper-menu">
        <img src={icon} alt="Home Icon" />
        <p className={['label', className].join(' ')}>{label}</p>
      </div>
    </Link>
  )
}

export default SidebarMenu
