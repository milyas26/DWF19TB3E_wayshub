import Button from '../../components/atoms/Button'
import Gap from '../../components/atoms/Gap'
import Input from '../../components/atoms/Input'
import InputFile from '../../components/atoms/InputFile'
import TextArea from '../../components/atoms/TextArea'
import './EditChannel.css'

import Photo from '../../assets/icons/photo.svg'

const EditChannel = () => {
  return (
    <div className="home">
      <div className="container-page">
        <h2>Edit Channel</h2>
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
        <Button title="Save" />
      </div>
    </div>
  )
}

export default EditChannel
