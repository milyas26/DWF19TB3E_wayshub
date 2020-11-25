import React from 'react'
import { Card } from 'react-bootstrap'
import viewIcon from '../../../assets/icons/view.svg'
import dateIcon from '../../../assets/icons/refresh.svg'
import './Thumbnail.css'
import { Link } from 'react-router-dom'

const Thumbnail = ({ img, title, channel, views, date }) => {
  return (
    <div className="thumbnail">
      <Card style={{ width: 227, backgroundColor: '#000' }}>
        <Link className="link-thumbnail">
          <Card.Img variant="top" src={img} />
          <h6 className="title">{title}</h6>
        </Link>
        <Link className="link-channel">
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
