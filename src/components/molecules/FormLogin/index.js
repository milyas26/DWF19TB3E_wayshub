import React from 'react'
import Button from '../../atoms/Button'
import Gap from '../../atoms/Gap'
import Input from '../../atoms/Input'
import './FormLogin.css'

const FormLogin = () => {
  return (
    <div className="container">
      <h1 className="title">Sign In</h1>
      <Input placeholder="Email" />
      <Gap height={20} />
      <Input placeholder="Password" type="password" />
      <Gap height={40} />
      <Button title="Sign In" />
    </div>
  )
}

export default FormLogin
