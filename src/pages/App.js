import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainComponent from '../components/molecules/MainComponent'
import HomePage from './Homepage'
import Landing from './Landing'
import SubscribedPage from './SubscribtionPage'
import MyChannelPage from './MyChannelPage'
import DetailVideoPage from './DetailVideoPage'
import ContentCreatorPage from './ContentCreatorPage'
import AddVideo from './AddVideoPage'
import EditChannel from './EditChannel'

function App() {
  return (
    <div className="App">
      <Router>
        <MainComponent />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/home" component={HomePage} />
          <Route path="/subscribed" component={SubscribedPage} />
          <Route path="/my-channel" component={MyChannelPage} />
          <Route path="/detail-video" component={DetailVideoPage} />
          <Route path="/content-creator" component={ContentCreatorPage} />
          <Route path="/add-video" component={AddVideo} />
          <Route path="/edit-channel" component={EditChannel} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
