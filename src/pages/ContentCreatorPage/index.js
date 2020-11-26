import React, { useState } from 'react'
import BackgroundImage from '../../assets/images/background-youtube.png'

import MyVideos from '../../components/molecules/MyVideos'
import Profile from '../../components/molecules/Profile'
import './ContentCreator.css'

const ContentCreator = () => {
  let [isSubscribed, setIsSubscribed] = useState(true)
  return (
    <div className="home">
      <div className="container-page">
        <div className="content-creator">
          <div className="image-wrapper">
            <img src={BackgroundImage} alt="" />
          </div>

          <div className="link-profile-wrapper">
            <Profile
              state={isSubscribed}
              title={!isSubscribed ? 'Subscribe' : 'Unsubscribe'}
            />
          </div>
          <MyVideos />
        </div>
      </div>
    </div>
  )
}

export default ContentCreator
