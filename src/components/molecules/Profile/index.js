import Button from '../../atoms/Button'
import User from '../../../assets/images/user2.png'
import './Profile.css'
import { Link } from 'react-router-dom'

const Profile = (props) => {
  return (
    <div className="profile">
      <div className="user-profile">
        <img src={User} alt="" />
        <div className="channel-name">
          <h6>BBQ Montain Boys</h6>
          <p>120K Subscriber</p>
        </div>
        <div className="button-wrapper">
          <Link to={props.to}>
            <Button className="add-button" title={props.title} isSmall />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Profile
