import MainComponent from '../../components/molecules/MainComponent'
import Videos from '../../components/molecules/Videos'
const Home = () => {
  return (
    <div className="home">
      <MainComponent isHome />
      <div className="container-page">
        <Videos />
      </div>
    </div>
  )
}

export default Home
