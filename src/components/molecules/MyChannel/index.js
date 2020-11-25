import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../../../assets/images/background-youtube.png'
import User from '../../../assets/images/user3.png'
import Button from '../../atoms/Button'
import MyVideos from '../MyVideos'
import MyDescription from '../MyVideos/Description'
import './MyChannel.css'

const AddVideo = () => {
  let [isDescription, setIsDescription] = useState(false)
  const handleVideo = () => {
    setIsDescription((isDescription = !isDescription))
  }
  const handleDescription = () => {
    setIsDescription((isDescription = !isDescription))
  }

  console.log(isDescription)

  return (
    <div className="add-video">
      <div className="image-wrapper">
        <img src={BackgroundImage} alt="" />
      </div>

      <div className="profile">
        <div className="user-profile">
          <img src={User} alt="" />
          <div className="channel-name">
            <h6>BBQ Montain Boys</h6>
            <p>120K Subscriber</p>
          </div>
          <div className="button-wrapper">
            <Button className="add-button" title="Edit Channel" isSmall />
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
  )
}

export default AddVideo
