import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../../assets/images/background-youtube.png'

import MyVideos from '../../components/molecules/MyVideos'
import MyDescription from '../../components/molecules/MyVideos/Description'
import Profile from '../../components/molecules/Profile'
import './MyChannel.css'

const AddVideo = () => {
  let [isDescription, setIsDescription] = useState(false)
  const handleVideo = () => {
    setIsDescription((isDescription = !isDescription))
  }
  const handleDescription = () => {
    setIsDescription((isDescription = !isDescription))
  }

  return (
    <div className="home">
      <div className="container-page">
        <div className="channel-wrapper">
          <div className="image-wrapper">
            <img src={BackgroundImage} alt="" />
          </div>

          <Profile title="Edit Channel" />

          <div className="link-profile-wrapper">
            <Link className="link-profile" onClick={handleVideo}>
              <span className={!isDescription ? 'active' : ''}>Video</span>
            </Link>
            <Link className="link-profile" onClick={handleDescription}>
              <span className={isDescription ? 'active' : ''}>
                Description Channel
              </span>
            </Link>
          </div>
          {!isDescription ? <MyVideos /> : <MyDescription />}
        </div>
      </div>
    </div>
  )
}

export default AddVideo
