import Button from '../../components/atoms/Button'
import Gap from '../../components/atoms/Gap'
import Input from '../../components/atoms/Input'
import InputFile from '../../components/atoms/InputFile'
import TextArea from '../../components/atoms/TextArea'
import './AddVideo.css'

import AttachIcon from '../../assets/icons/attach.svg'
import VideoIcon from '../../assets/icons/add_video_orange.svg'

const AddVideo = () => {
  return (
    <div className="home">
      <div className="container-page">
        <h2>Add Video</h2>
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
        <Button title="Upload" />
      </div>
    </div>
  )
}

export default AddVideo
