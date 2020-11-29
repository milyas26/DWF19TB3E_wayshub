import React from 'react'
import Input from '../../atoms/Input'
import User from '../../../assets/images/user2.png'
import addVideoLight from '../../../assets/icons/add_video_white.svg'
import addVideoActive from '../../../assets/icons/add_video_orange.svg'
import './Header.css'
import Button from '../../atoms/Button'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import UserIcon from '../../../assets/icons/user_white.svg'
import LoginIcon from '../../../assets/icons/logout_white.svg'
import LogoutIcon from '../../../assets/icons/logout_red.svg'
import { useContext } from 'react'
import { AppContext } from '../../../context/appContext'

const Header = ({ isAddVideo, onChange }) => {
  const [state, dispatch] = useContext(AppContext)

  const handleLogout = () => {
    dispatch({
      type: 'LOGOUT',
    })
  }
  return (
    <div className="header fixed-top">
      <div className="search">
        <Input placeholder="Search ..." height={40} onChange={onChange} />
      </div>
      <div className="user">
        <Link to="/add-video" className="link-add-video">
          <Button
            type="add"
            icon={isAddVideo ? addVideoActive : addVideoLight}
            title="Add Video"
            isAddVideo={isAddVideo}
          />
        </Link>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className="dropdown-toggle">
            <img className="userImage" src={User} alt="user" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/my-channel">
              <img src={UserIcon} alt="my channel" />
              <span>My Channel</span>
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              to={state.isLogin ? '/home' : '/'}
              onClick={handleLogout}
            >
              <img
                src={state.isLogin ? LogoutIcon : LoginIcon}
                alt="my channel"
              />
              <span
                style={{
                  color: state.isLogin ? 'red' : '#fff',
                }}
              >
                {state.isLogin ? 'Logout' : 'Login'}
              </span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  )
}

export default Header
