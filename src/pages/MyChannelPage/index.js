import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../../assets/images/background-youtube.png'
import User from '../../assets/images/user2.png'
import MainComponent from '../../components/molecules/MainComponent'
import MyVideos from '../../components/molecules/MyVideos'
import MyDescription from '../../components/molecules/MyVideos/Description'
import './MyChannel.css'

const MyChannel = () => {
  let [isDescription, setIsDescription] = useState(false)
  const handleVideo = () => {
    setIsDescription((isDescription = !isDescription))
  }
  const handleDescription = () => {
    setIsDescription((isDescription = !isDescription))
  }

  return (
    <div className="home">
      <MainComponent />
      <div className="container-page">
        <div className="channel-wrapper">
          <div className="image-wrapper">
            <img src={BackgroundImage} alt="" />
          </div>

          <div className="profile">
            <div className="user-profile">
              <img src={User} alt="" />
              <div className="channel-name">
                <h6>Channel Saya</h6>
                <p>236K Subscriber</p>
              </div>
              <div className="button-wrapper">
                <Link to={'/edit-channel'}>
                  <button className="button btn-sm">Edit Channel</button>
                </Link>
              </div>
            </div>
          </div>

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

export default MyChannel
