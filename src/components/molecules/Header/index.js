import React from 'react'
import Input from '../../atoms/Input'
import User from '../../../assets/images/user2.png'
import addVideoLight from '../../../assets/icons/add_video_white.svg'
import './Header.css'
import Button from 'components/atoms/Button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header fixed-top">
      <div className="search">
        <Input placeholder="Search ..." height={40} />
      </div>
      <div className="user">
        <Button type="add" icon={addVideoLight} title="Add Video" />
        <Link>
          <img className="userImage" src={User} alt="user" />
        </Link>
      </div>
    </div>
  )
}

export default Header
