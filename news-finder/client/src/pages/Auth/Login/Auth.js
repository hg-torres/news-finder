import LoginForm from "../../../components/LoginForm"
import RegisterForm from "../../../components/RegisterForm"
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { useState, useEffect } from 'react'

const Auth = () => {
  const [hasAccount, setStatus ] = useState(false)
  const buttonHandler = () => {
    setStatus(current => !current)
  }

  useEffect(()=>{
    console.log(hasAccount)
  },[hasAccount])

  return (
    <>
      {!hasAccount ? <LoginForm /> : <RegisterForm />}
      <Grid container justifyContent="center">
        <Grid item>
          <Button onClick={buttonHandler} disableRipple = 'true' >{!hasAccount ? "Don't have an account? Sign Up" : "Already have an account? Sign in"}</Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Auth