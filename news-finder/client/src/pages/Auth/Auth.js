import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import { useState, useEffect } from 'react'
import LoginForm from "../../components/LoginForm"
import RegisterForm from "../../components/RegisterForm"
import UserAPI from "../../utils/UserAPI"
import AuthContext from "../../utils/AuthContext"

const Auth = () => {
  const [hasAccount, setStatus ] = useState(true)
  const buttonHandler = () => {
    setStatus(current => !current)
  }

  useEffect(()=>{
    console.log(hasAccount)
  },[hasAccount])

  const [authState, setAuthState] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    lUsername: '',
    lPassword: ''
  })

  authState.handleInputChange = ({ target: { name, value } }) => setAuthState({ ...authState, [name]: value })

  authState.handleRegisterUser = event => {
    event.preventDefault()
    UserAPI.register({
      name: authState.name,
      email: authState.email,
      username: authState.username,
      password: authState.password
    })
      .then(() => {
        alert('User Registered! Please Log In!')
        setAuthState({ ...authState, name: '', email: '', username: '', password: '' })
      })
  }

  authState.handleLoginUser = event => {
    event.preventDefault()
    UserAPI.login({
      username: authState.lUsername,
      password: authState.lPassword
    })
      .then(token => {
        localStorage.setItem('user', token)
        setAuthState({ ...authState, lUsername: '', lPassword: '' })
        window.location = '/'
      })
  } 

  return (
    <AuthContext.Provider value={authState}>
      {hasAccount ? <LoginForm /> : <RegisterForm />}
      <Grid container justifyContent="center">
        <Grid item>
          <Link component="button" onClick={buttonHandler}>{hasAccount ? "Don't have an account? Sign Up" : "Already have an account? Sign in"}</Link>
        </Grid>
      </Grid>
    </AuthContext.Provider>
  )
}

export default Auth