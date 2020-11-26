import Header from '../Header'
import SideBar from '../SideBar'
import './MainComponent.css'

const MainComponent = ({ isHome, isSubscribed, isAddVideo }) => {
  return (
    <div className="main">
      <div className="sidebar">
        <SideBar isHome={isHome} isSubscribed={isSubscribed} />
      </div>

      <div className="right">
        <Header isAddVideo={isAddVideo} />
      </div>
    </div>
  )
}

export default MainComponent
