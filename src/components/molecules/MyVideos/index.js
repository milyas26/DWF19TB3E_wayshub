import React from 'react'
import Thumbnail from '../Thumbnail'
import MyVideosDummy from '../../../assets/Dummy/MyVideos'

const MyVideos = () => {
  return (
    <div className="videos">
      <div className="thumbnail">
        {MyVideosDummy.map((item) => (
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
  )
}

export default MyVideos
