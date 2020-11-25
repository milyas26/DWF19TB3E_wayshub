import React from 'react'
import Header from '../../components/molecules/Header'
import Videos from '../../components/molecules/Videos'

import brandIcon from '../../assets/icons/brandIcon.svg'
import homeIcon from '../../assets/icons/home_orange.svg'
import subscriptionIcon from '../../assets/icons/subscription_white.svg'
import SidebarMenu from '../../components/atoms/SidebarMenu'

// Channel Images
import User1 from '../../assets/images/user1.png'
import User2 from '../../assets/images/user2.png'
import User3 from '../../assets/images/user3.png'
import User4 from '../../assets/images/user4.png'
import Channel from '../../components/atoms/Channel'

const Home = () => {
  return (
    <div className="home">
      <div className="sidebar">
        <div className="sidebar-wrapper ">
          <img className="icon" src={brandIcon} alt="Brand Icon" />
          <SidebarMenu icon={homeIcon} label="Home" isActive />
          <SidebarMenu icon={subscriptionIcon} label="Subscription" />
          <h3>Channel</h3>
          <Channel image={User1} label="Sab" />
          <Channel image={User2} label="BBQ Mountain" />
          <Channel image={User3} label="Egi Jos" />
          <Channel image={User4} label="Tahu Koding" />
          <h4 className="show-more">Show More</h4>
        </div>
      </div>

      <div className="right">
        <Header />
        <Videos />
      </div>
    </div>
  )
}

export default Home
