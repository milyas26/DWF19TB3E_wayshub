import React from 'react'
import DummyHompage from '../../../assets/Dummy/Homepage'
import Thumbnail from '../../molecules/Thumbnail'

const Videos = () => {
  return (
    <div className="thumbnail">
      {DummyHompage.map((item) => (
        <div className="thumbnail-wrapper">
          <Thumbnail
            key={item.id}
            img={item.image}
            title={item.title}
            channel={item.channel}
            views={item.views}
            date={item.date}
          />
        </div>
      ))}
    </div>
  )
}

export default Videos
