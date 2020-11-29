import ReactPlayer from 'react-player'
import DummyVideos from '../../assets/Dummy/ListVideos'
import User from '../../assets/images/user2.png'
import viewIcon from '../../assets/icons/view.svg'
import dateIcon from '../../assets/icons/refresh.svg'
import TextArea from '../../components/atoms/TextArea'
import './DetailVideo.css'
import Button from '../../components/atoms/Button'
import Comments from '../../components/atoms/Comments'
import CommentsText from '../../assets/Dummy/Comments'
import MainComponent from '../../components/molecules/MainComponent'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Thumbnail from '../../components/molecules/Thumbnail'

const DetailVideoPage = () => {
  const [video, setVideo] = useState('')
  let { id } = useParams()

  useEffect(() => {
    const videoById = DummyVideos.find((video) => video.id == id)
    console.log(videoById)
    setVideo(videoById)
  }, [])

  return (
    <div className="home">
      <MainComponent />
      <div className="container-page">
        <div className="detail-video">
          <div className="details">
            <ReactPlayer width="100%" controls url={video.URL} />
            <h2>{video.title}</h2>
            <div className="stats">
              <div className="views">
                <img src={viewIcon} alt="views" />
                <span>{video.views}</span>
              </div>
              <div className="dates">
                <img src={dateIcon} alt="Date" />
                <span>{video.date}</span>
              </div>
            </div>
            <div className="comment-section">
              <div className="comment">
                <img src={User} alt="" />
                <div className="textarea">
                  <TextArea placeholder="Comment..." />
                </div>
              </div>
              <div className="button-wrapper">
                <Button isSmall title="Post" />
              </div>
              {CommentsText.map((item) => (
                <Comments key={item} image={item.image} text={item.text} />
              ))}
            </div>
          </div>
          <div className="recomendation">
            <h4>RECOMENDATION</h4>
            <div className="videos">
              <div className="thumbnail recomendation">
                {DummyVideos.map((item) => (
                  <div className="thumbnail-wrapper">
                    <Thumbnail
                      key={item.id}
                      id={item.id}
                      img={item.image}
                      title={item.title}
                      channel={item.channel}
                      views={item.views}
                      date={item.date}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailVideoPage
