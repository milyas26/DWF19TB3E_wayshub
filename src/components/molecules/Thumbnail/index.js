import React from 'react'
import { Card } from 'react-bootstrap'
import thumbnail from '../../../assets/images/thumbnail1.png'
import viewIcon from '../../../assets/icons/view.svg'
import dateIcon from '../../../assets/icons/refresh.svg'
import './Thumbnail.css'

const Thumbnail = ({ img, title, channel, views, date }) => {
  console.log(img, title)
  return (
    <div className="thumbnail">
      <Card style={{ width: 227, backgroundColor: '#000' }}>
        <Card.Img variant="top" src={img} />
        <h6 className="title">{title}</h6>
        <p className="channel">{channel}</p>
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
