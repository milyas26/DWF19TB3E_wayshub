import React from 'react'
import DummyHompage from '../../../assets/Dummy/Homepage'
import DummySubscribed from '../../../assets/Dummy/Subscribed'
import Thumbnail from '../../molecules/Thumbnail'
import './Videos.css'

const Videos = ({ state }) => {
  console.log(state)
  if (state === 'Subscribed') {
    return (
      <div className="videos">
        <h2>SUBSCRIBED</h2>
        <div className="thumbnail">
          {DummySubscribed.map((item) => (
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
      </div>
    )
  }
  return (
    <div className="videos">
      <h2>FOR YOUR PAGE</h2>
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
    </div>
  )
}

export default Videos
