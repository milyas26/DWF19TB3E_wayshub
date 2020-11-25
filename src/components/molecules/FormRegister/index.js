import React from 'react'
import Input from '../../atoms/Input'
import Gap from '../../atoms/Gap'
import Button from '../../atoms/Button'
import './FormRegister.css'
import TextArea from '../../atoms/TextArea'

const FormRegister = (props) => {
  return (
    <div className="register">
      <h1 className="title">Sign Up</h1>
      <Input placeholder="Email" />
      <Gap height={20} />
      <Input placeholder="Password" type="password" />
      <Gap height={20} />
      <Input placeholder="Name Channel" />
      <Gap height={20} />
      <TextArea placeholder="Description Channel" />
      <Gap height={40} />
      <Button title="Sign Up" onClick={props.registered} />
    </div>
  )
}

export default FormRegister
