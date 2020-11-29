import Header from '../Header'
import SideBar from '../SideBar'
import './MainComponent.css'

const MainComponent = ({ isHome, isSubscribed, isAddVideo, onChange }) => {
  return (
    <div className="main">
      <div className="sidebar">
        <SideBar isHome={isHome} isSubscribed={isSubscribed} />
      </div>

      <div className="right">
        <Header isAddVideo={isAddVideo} onChange={onChange} />
      </div>
    </div>
  )
}

export default MainComponent
