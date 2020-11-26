import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AppContextProvider } from '../context/appContext'
import PrivateRoute from '../components/Routes/privateRoute'
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
      <AppContextProvider>
        <Router>
          <Switch>
            <Route exact path="/login" component={Landing} />
            <Route exact path="/" component={HomePage} />
            <PrivateRoute exact path="/subscribed" component={SubscribedPage} />
            <PrivateRoute exact path="/my-channel" component={MyChannelPage} />
            <Route exact path="/detail-video/:id" component={DetailVideoPage} />
            <Route
              exact
              path="/content-creator"
              component={ContentCreatorPage}
            />
            <PrivateRoute exact path="/add-video" component={AddVideo} />
            <PrivateRoute exact path="/edit-channel" component={EditChannel} />
          </Switch>
        </Router>
      </AppContextProvider>
    </div>
  )
}

export default App
