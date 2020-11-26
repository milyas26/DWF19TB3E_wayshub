import Header from '../Header'
import SideBar from '../SideBar'
import './MainComponent.css'

const MainComponent = () => {
  const className = []
  if (window.location.pathname == '/') className.push('hide')
  return (
    <div className={['main', className].join(' ')}>
      <div className="sidebar">
        <SideBar />
      </div>

      <div className="right">
        <Header />
      </div>
    </div>
  )
}

export default MainComponent
