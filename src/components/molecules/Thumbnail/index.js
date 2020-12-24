// React Packages
import { Card } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'

// Assets
import viewIcon from '../../../assets/icons/view.svg'
import dateIcon from '../../../assets/icons/refresh.svg'
import commentIcon from '../../../assets/icons/speech-bubble.png'

// CSS
import './Thumbnail.css'
import { useState } from 'react'
import { API } from '../../../config/api'

const Thumbnail = ({
  id,
  img,
  title,
  channel,
  views,
  date,
  idChannel,
  comments,
  onClickDeleteVideo,
}) => {
  const history = useHistory()

  const handleClick = () => {
    history.push(`/detail-video/${id}`)
    window.location.reload()
  }

  const myDate = new Date(date).toLocaleDateString()

  let [isShown, setIsShown] = useState(false)
  const handleDropDown = () => {
    setIsShown((isShown = !isShown))
  }

  let [isConfirm, setIsConfirm] = useState(false)

  const handleShowConfirm = () => {
    setIsShown(false)
    setIsConfirm(true)
  }

  const deleteVideo = async () => {
    try {
      const response = await API.delete(`/video/${id}`)

      setIsConfirm(false)
      onClickDeleteVideo()
    } catch (err) {
      console.log(err)
    }
  }

  // Edit Video
  const editVideo = () => {
    history.push(`/edit-video/${id}`)
  }

  return (
    <div className="thumbnail">
      <Card style={{ width: 227, backgroundColor: '#000' }}>
        <Link
          onClick={handleClick}
          to={`/detail-video/${id}`}
          className="link-thumbnail"
        >
          <Card.Img variant="top" src={img ? img : <Skeleton />} />
          <h6 className="title">{title}</h6>
        </Link>
        <Link to={`/content-creator/${idChannel}`} className="link-thumbnail">
          <p className="channel">{channel}</p>
        </Link>
        <div className="description">
          <div className="views">
            <img src={viewIcon} alt="views" />
            <span>{views}</span>
          </div>
          <div className="comment-icon">
            <img src={commentIcon} alt="views" />
            <span>{comments}</span>
          </div>
          <div className="dates">
            <img src={dateIcon} alt="Date" />
            <span>{myDate}</span>
          </div>
        </div>

        {idChannel == localStorage.id && (
          <div className="option" onClick={handleDropDown}>
            <i className="fas fa-ellipsis-v elipsis"></i>
            <div
              className="dropdown"
              style={{ display: isShown ? 'flex' : 'none' }}
            >
              <span className="delete" onClick={handleShowConfirm}>
                <i className="fas fa-trash-alt" style={{ marginRight: 5 }}></i>{' '}
                Delete
              </span>
              <span onClick={editVideo}>
                <i className="fas fa-pencil-alt"></i> Edit
              </span>
            </div>
          </div>
        )}
      </Card>

      <div className="card-wrapper">
        <div
          className="confirm-delete"
          style={{ display: isConfirm ? '' : 'none' }}
        >
          <span>
            <i className="fas fa-exclamation-triangle"></i> Are you sure want to
            delete this video?
          </span>
          <div className="button-confirm">
            <button onClick={deleteVideo}>Yes</button>
            <button onClick={() => setIsConfirm(false)}>No</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Thumbnail
