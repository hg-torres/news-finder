import RegisterForm from "../../components/RegisterForm"
import LoginForm from "../../components/LoginForm"

const Auth = () => {
  return (
    <>
      <div className="container">
        <div className="row bg-light p-5 rounded-lg m-3">
          <h1 className="display-4">Informed App</h1>
          <p className="lead">Welcome to Informed! A place where irrelevant news no longer is an issue, start selecting search parameters and your personalized newsfeed will be created!</p>
          <hr className="my-4" />
        </div>
        <div className="row">
          <div className="col-md-6">
            <h5>Register A New Account</h5>
            <hr />
            <RegisterForm />            
          </div>
          <div className="col-md-6">
            <h5>Log In To Existing Account</h5>
            <hr />
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default Auth