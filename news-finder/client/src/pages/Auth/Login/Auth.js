import LoginForm from "../../../components/LoginForm"
import RegisterForm from "../../../components/RegisterForm"
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
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
          <Link component="button" onClick={buttonHandler}>{!hasAccount ? "Don't have an account? Sign Up" : "Already have an account? Sign in"}</Link>
        </Grid>
      </Grid>
    </>
  )
}

export default Auth