import brandIcon from '../../../assets/icons/brandIcon.svg'
import homeIconActive from '../../../assets/icons/home_orange.svg'
import homeInActive from '../../../assets/icons/home_white.svg'
import subscriptionIconInActive from '../../../assets/icons/subscription_white.svg'
import subscriptionIconActive from '../../../assets/icons/subscription_orange.svg'
import SidebarMenu from '../../atoms/SidebarMenu'
import './Sidebar.css'

// Channel Images
import Channels from '../../../assets/Dummy/Channel'
import Channel from '../../../components/atoms/Channel'
import { Link } from 'react-router-dom'

const SideBar = ({ isHome, isSubscribed }) => {
  return (
    <div className="sidebar-wrapper ">
      <Link to="/home">
        <img className="icon" src={brandIcon} alt="Brand Icon" />
      </Link>
      <SidebarMenu
        to="/home"
        icon={isHome ? homeIconActive : homeInActive}
        isActive={isHome ? true : false}
        label="Home"
      />
      <SidebarMenu
        to="/subscribed"
        icon={isSubscribed ? subscriptionIconActive : subscriptionIconInActive}
        isActive={isSubscribed ? true : false}
        label="Subscription"
      />
      <h3>Channel</h3>
      {Channels.map((item) => (
        <Channel item={item} key={item.id} />
      ))}
      <Link to="/channels" className="link-sidebar">
        <h4 className="show-more">Show More</h4>
      </Link>
    </div>
  )
}

export default SideBar
