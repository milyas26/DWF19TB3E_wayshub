import { useState } from 'react'
import Greeting from '../../assets/images/greeting.png'
import Gap from '../../components/atoms/Gap'
import Button from '../../components/atoms/Button'
import FormLogin from '../../components/molecules/FormLogin'
import FormRegister from '../../components/molecules/FormRegister'

function Landing() {
  let [isRegistered, setIsRegistered] = useState(true)

  const handleClick = () => {
    setIsRegistered((isRegistered = !isRegistered))
  }

  const Registered = () => {
    setIsRegistered((isRegistered = true))
  }

  return (
    <div className="page">
      <div className="left">
        <div className="left-content">
          <img src={Greeting} alt="" />
          <Gap height={60} />
          <Button
            title={isRegistered ? 'Sign Up' : 'Sign In'}
            isSmall
            onClick={handleClick}
          />
        </div>
      </div>
      <div className="right">
        {isRegistered ? (
          <FormLogin />
        ) : (
          <FormRegister registered={Registered} />
        )}
      </div>
    </div>
  )
}

export default Landing
