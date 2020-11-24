import React from 'react'
import './Landing.css'
import Greeting from '../../assets/images/greeting.png'
import Gap from '../../components/atoms/Gap'
import Button from '../../components/atoms/Button'
import FormLogin from '../../components/molecules/FormLogin'

function Landing() {
  return (
    <div className="page">
      <div className="left">
        <div className="left-content">
          <img src={Greeting} alt="" />
          <Gap height={60} />
          <Button title="Sign Up" isSmall />
        </div>
      </div>
      <div className="right">
        <FormLogin />
      </div>
    </div>
  )
}

export default Landing
