import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../../assets/images/background-youtube.png'

import MyVideos from '../../components/molecules/MyVideos'
import Profile from '../../components/molecules/Profile'
import './ContentCreator.css'

const AddVideo = () => {
  return (
    <div className="home">
      <div className="container-page">
        <div className="content-creator">
          <div className="image-wrapper">
            <img src={BackgroundImage} alt="" />
          </div>

          <Profile title="Subscribe" />

          <div className="link-profile-wrapper">
            <MyVideos />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddVideo
