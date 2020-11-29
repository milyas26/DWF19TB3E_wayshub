import MainComponent from '../../components/molecules/MainComponent'
import DummySubscribed from '../../assets/Dummy/Subscribed'
import Thumbnail from '../../components/molecules/Thumbnail'
import { useState } from 'react'

const SubscribtionPage = () => {
  let [search, setSearch] = useState()

  const handleSearch = (e) => {
    let keyword = e.target.value

    setSearch((search = keyword))
  }

  const items = DummySubscribed.filter((item) => {
    if (search == null) {
      return item
    } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
      return item
    }
  }).map((item) => (
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
  ))

  return (
    <div className="home">
      <MainComponent isSubscribed onChange={(e) => handleSearch(e)} />
      <div className="container-page">
        <div className="videos">
          <h2>SUBSCRIBED</h2>
          <div className="thumbnail">{items}</div>
        </div>
      </div>
    </div>
  )
}

export default SubscribtionPage
