import './InputFile.css'

const InputFile = ({ height, label, icon }) => {
  return (
    <div className="input-file-wrapper">
      <div className="input-file">
        <label htmlFor="">{label}</label>
        <input type="file" className="input" style={{ height: height }} />
        <img src={icon} alt="" />
      </div>
    </div>
  )
}

export default InputFile
