import React, { useEffect, useState } from 'react'
import BackgroundImage from '../../assets/images/background-youtube.png'
import MainComponent from '../../components/molecules/MainComponent'
import Channel from '../../assets/Dummy/Channel'
import MyVideos from '../../components/molecules/MyVideos'
import Profile from '../../components/molecules/Profile'
import './ContentCreator.css'
import { useParams } from 'react-router-dom'

const ContentCreator = () => {
  let [isSubscribed, setIsSubscribed] = useState(false)
  const handleClick = () => {
    setIsSubscribed((isSubscribed = !isSubscribed))
  }

  const [creator, setCreator] = useState('')
  let { id } = useParams()

  useEffect(() => {
    const creatorById = Channel.find((creator) => creator.id == id)
    setCreator(creatorById)
  }, [])

  return (
    <div className="home">
      <MainComponent />
      <div className="container-page">
        <div className="content-creator">
          <div className="image-wrapper">
            <img src={BackgroundImage} alt="" />
          </div>

          <div className="link-profile-wrapper">
            <Profile
              onClick={handleClick}
              state={isSubscribed}
              title={!isSubscribed ? 'Subscribe' : 'Unsubscribe'}
              creator={creator}
            />
          </div>
          <MyVideos />
        </div>
      </div>
    </div>
  )
}

export default ContentCreator
