import MainComponent from '../../components/molecules/MainComponent'
import Videos from '../../components/molecules/Videos'

const SubscribtionPage = () => {
  return (
    <div className="home">
      <MainComponent isSubscribed />
      <div className="container-page">
        <Videos isSubscribed />
      </div>
    </div>
  )
}

export default SubscribtionPage
