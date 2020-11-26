import Button from '../../components/atoms/Button'
import Gap from '../../components/atoms/Gap'
import Input from '../../components/atoms/Input'
import InputFile from '../../components/atoms/InputFile'
import TextArea from '../../components/atoms/TextArea'
import MainComponent from '../../components/molecules/MainComponent'
import './EditChannel.css'

import Photo from '../../assets/icons/photo.svg'
import { Link } from 'react-router-dom'

const EditChannel = () => {
  return (
    <div className="home">
      <MainComponent />
      <div className="container-page">
        <h2 className="edit-channel">Edit Channel</h2>
        <div className="input-wrapper">
          <div className="input-title">
            <Input placeholder="Name Channel" />
          </div>
          <div className="input-attach">
            <InputFile height={55} label="Upload Thumbnail" icon={Photo} />
          </div>
        </div>
        <TextArea placeholder="Description" height={177} />
        <Gap height={12} />
        <div className="input-video">
          <InputFile height={55} label="Upload Photo" icon={Photo} />
        </div>
        <Gap height={45} />
        <Link to="/my-channel">
          <Button title="Save" />
        </Link>
      </div>
    </div>
  )
}

export default EditChannel
