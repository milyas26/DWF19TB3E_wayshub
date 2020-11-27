import React, { useContext } from 'react'
import Button from '../../atoms/Button'
import Gap from '../../atoms/Gap'
import Input from '../../atoms/Input'
import './FormLogin.css'
import { Link } from 'react-router-dom'
import { AppContext } from '../../../context/appContext'

const FormLogin = () => {
  const [state, dispatch] = useContext(AppContext)

  const handleLogin = () => {
    dispatch({
      type: 'LOGIN',
    })
  }
  return (
    <div className="login">
      <h1 className="title">Sign In</h1>
      <Input placeholder="Email" />
      <Gap height={20} />
      <Input placeholder="Password" type="password" />
      <Gap height={40} />
      <Link to="/home">
        <Button title="Sign In" onClick={handleLogin} />
      </Link>
    </div>
  )
}

export default FormLogin
