import DummyHompage from '../../../assets/Dummy/Homepage'
import DummySubscribed from '../../../assets/Dummy/Subscribed'
import Thumbnail from '../../molecules/Thumbnail'
import './Videos.css'

const Videos = ({ isRecomendation, isSubscribed }) => {
  const className = []
  if (isRecomendation) className.push('recomendation')
  if (isSubscribed) {
    return (
      <div className="videos">
        <h2>SUBSCRIBED</h2>
        <div className="thumbnail">
          {DummySubscribed.map((item) => (
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
  return (
    <div className="videos">
      {!isRecomendation ? <h2>FOR YOUR PAGE</h2> : null}
      <div className={['thumbnail', className].join(' ')}>
        {DummyHompage.map((item) => (
          <div className="thumbnail-wrapper">
            <Thumbnail
              key={item._id}
              id={item._id}
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
