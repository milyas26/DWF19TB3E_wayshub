import Thumbnail from '../../assets/images/thumbnail17.png'
import User from '../../assets/images/user2.png'
import viewIcon from '../../assets/icons/view.svg'
import dateIcon from '../../assets/icons/refresh.svg'
import TextArea from '../../components/atoms/TextArea'
import Videos from '../../components/molecules/Videos'
import './DetailVideo.css'
import Button from '../../components/atoms/Button'
import Comments from '../../components/atoms/Comments'
import CommentsText from '../../assets/Dummy/Comments'
import MainComponent from '../../components/molecules/MainComponent'

const DetailVideoPage = () => {
  return (
    <div className="home">
      <MainComponent />
      <div className="container-page">
        <div className="detail-video">
          <div className="details">
            <img src={Thumbnail} alt="" />
            <h2>BBQ Montain Boys Episode 5 : A Day in The Life of Farmer</h2>
            <div className="stats">
              <div className="views">
                <img src={viewIcon} alt="views" />
                <span>290K</span>
              </div>
              <div className="dates">
                <img src={dateIcon} alt="Date" />
                <span>20 August 2020</span>
              </div>
            </div>
            <div className="comment-section">
              <div className="comment">
                <img src={User} alt="" />
                <div className="textarea">
                  <TextArea placeholder="Comment..." />
                </div>
              </div>
              <div className="button-wrapper">
                <Button isSmall title="Post" />
              </div>
              {CommentsText.map((item) => (
                <Comments image={item.image} text={item.text} />
              ))}
            </div>
          </div>
          <div className="recomendation">
            <h4>RECOMENDATION</h4>
            <Videos isRecomendation />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailVideoPage
