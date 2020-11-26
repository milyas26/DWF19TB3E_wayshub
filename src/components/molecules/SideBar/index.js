import React, { useState } from 'react'
import brandIcon from '../../../assets/icons/brandIcon.svg'
import homeIconActive from '../../../assets/icons/home_orange.svg'
import homeInActive from '../../../assets/icons/home_white.svg'
import subscriptionIconInActive from '../../../assets/icons/subscription_white.svg'
import subscriptionIconActive from '../../../assets/icons/subscription_orange.svg'
import SidebarMenu from '../../atoms/SidebarMenu'

// Channel Images
import Channels from '../../../assets/Dummy/Channel'
import Channel from '../../../components/atoms/Channel'
import { Link } from 'react-router-dom'

const SideBar = () => {
  let [Menu, setMenu] = useState('Home')
  const home = () => {
    setMenu((Menu = 'Home'))
  }
  const subscribed = () => {
    setMenu((Menu = 'Subscribed'))
  }
  return (
    <div className="sidebar-wrapper ">
      <Link>
        <img className="icon" src={brandIcon} alt="Brand Icon" />
      </Link>
      <SidebarMenu
        icon={Menu === 'Home' ? homeIconActive : homeInActive}
        isActive={Menu === 'Home' ? true : false}
        label="Home"
        onClick={home}
      />
      <SidebarMenu
        icon={
          Menu === 'Subscribed'
            ? subscriptionIconActive
            : subscriptionIconInActive
        }
        isActive={Menu === 'Subscribed' ? true : false}
        label="Subscription"
        onClick={subscribed}
      />
      <h3>Channel</h3>
      {Channels.map((item) => (
        <Channel key={item.id} image={item.image} label={item.label} />
      ))}
      <h4 className="show-more">Show More</h4>
    </div>
  )
}

export default SideBar
