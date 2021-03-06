import { Card } from 'react-bootstrap'
import viewIcon from '../../../assets/icons/view.svg'
import dateIcon from '../../../assets/icons/refresh.svg'
import './Thumbnail.css'
import { Link, useHistory } from 'react-router-dom'

const Thumbnail = ({ id, img, title, channel, views, date }) => {
  const history = useHistory()

  const handleClick = () => {
    history.push(`/detail-video/${id}`)
    window.location.reload()
  }

  return (
    <div className="thumbnail">
      <Card style={{ width: 227, backgroundColor: '#000' }}>
        {/* <Link to={`/detail-video/${id}`} className="link-thumbnail"> */}
        <Link
          onClick={handleClick}
          to={`/detail-video/${id}`}
          className="link-thumbnail"
        >
          <Card.Img variant="top" src={img} />
          <h6 className="title">{title}</h6>
        </Link>
        <Link to={`/content-creator/${id}`} className="link-thumbnail">
          <p className="channel">{channel}</p>
        </Link>
        <div className="description">
          <div className="views">
            <img src={viewIcon} alt="views" />
            <span>{views}</span>
          </div>
          <div className="dates">
            <img src={dateIcon} alt="Date" />
            <span>{date}</span>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Thumbnail
