import React from 'react'
import Button from '../../atoms/Button'
import Gap from '../../atoms/Gap'
import Input from '../../atoms/Input'
import './FormLogin.css'
import { Link } from 'react-router-dom'

const FormLogin = () => {
  return (
    <div className="login">
      <h1 className="title">Sign In</h1>
      <Input placeholder="Email" />
      <Gap height={20} />
      <Input placeholder="Password" type="password" />
      <Gap height={40} />
      <Link to="/home">
        <Button title="Sign In" />
      </Link>
    </div>
  )
}

export default FormLogin
