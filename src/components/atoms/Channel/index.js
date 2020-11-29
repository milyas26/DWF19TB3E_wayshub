import { Link, useHistory } from 'react-router-dom'
import './Channel.css'

const Channel = ({ item }) => {
  const history = useHistory()

  const handleClick = () => {
    history.push(`/content-creator/${item.id}`)
    window.location.reload()
  }

  return (
    <Link
      onClick={handleClick}
      to={`/content-creator/${item.id}`}
      className="link-channel"
    >
      <div className="channel-sidebar">
        <img src={item.image} alt="Channel" />
        <p>{item.label}</p>
      </div>
    </Link>
  )
}

export default Channel
