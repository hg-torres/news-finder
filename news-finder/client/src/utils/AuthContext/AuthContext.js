import { createContext } from "react"

const AuthContext = createContext({
  name: '',
  username: '',
  email: '',
  password: '',
  lUsername: '',
  lPassword: '',
  handleInputChange: () => { },
  handleRegisterUser: () => { },
  handleLoginUser: () => { }
})

export default AuthContext