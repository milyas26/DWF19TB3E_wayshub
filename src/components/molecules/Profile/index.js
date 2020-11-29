import User from '../../../assets/images/user2.png'
import './Profile.css'
import { Link } from 'react-router-dom'

const Profile = (props) => {
  const className = []
  if (props.state) className.push('button-subscribed')
  return (
    <div className="profile">
      <div className="user-profile">
        <img src={props.creator.image} alt="" />
        <div className="channel-name">
          <h6>{props.creator.label}</h6>
          <p>{props.creator.subscriber} Subscriber</p>
        </div>
        <div className="button-wrapper">
          <Link to={props.to}>
            <button
              onClick={props.onClick}
              className={['button btn-sm', className].join(' ')}
            >
              {props.title}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Profile
