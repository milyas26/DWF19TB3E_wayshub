import { useRef } from 'react'
import './InputFile.css'

const InputFile = ({ label, icon, handleFile }) => {
  const hiddenFileInput = useRef(null)
  const handleClick = (e) => {
    hiddenFileInput.current.click()
  }
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0]
    console.log(fileUploaded)
  }
  return (
    <div className="input-file-wrapper">
      <div className="input-file">
        <label htmlFor="" onClick={handleClick}>
          {label}
        </label>
        <input
          type="file"
          className="input"
          ref={hiddenFileInput}
          onChange={handleChange}
        />
        <img src={icon} alt="" />
      </div>
    </div>
  )
}

export default InputFile
