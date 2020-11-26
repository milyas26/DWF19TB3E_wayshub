import Button from '../../components/atoms/Button'
import Gap from '../../components/atoms/Gap'
import Input from '../../components/atoms/Input'
import InputFile from '../../components/atoms/InputFile'
import TextArea from '../../components/atoms/TextArea'
import './AddVideo.css'

import AttachIcon from '../../assets/icons/attach.svg'
import VideoIcon from '../../assets/icons/add_video_orange.svg'
import { Link } from 'react-router-dom'
import MainComponent from '../../components/molecules/MainComponent'

const AddVideo = () => {
  return (
    <div className="home">
      <MainComponent isAddVideo />
      <div className="container-page">
        <h2 className="add-video">Add Video</h2>
        <div className="input-wrapper">
          <div className="input-title">
            <Input placeholder="Title" />
          </div>
          <div className="input-attach">
            <InputFile height={55} label="Attach Thumbnail" icon={AttachIcon} />
          </div>
        </div>
        <TextArea placeholder="Description" height={177} />
        <Gap height={12} />
        <div className="input-video">
          <InputFile height={55} label="Upload Video" icon={VideoIcon} />
        </div>
        <Gap height={45} />
        <Link to="/my-channel">
          <Button title="Upload" />
        </Link>
      </div>
    </div>
  )
}

export default AddVideo
