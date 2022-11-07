import React from 'react'
import { Navigate } from 'react-router-dom'
import FormLogin from '../components/FormLogin'
import Header from '../components/shared/Header'
import '../styles/Login.css'

const Login = () => {

  if (!localStorage.getItem('token')) {
    return (<>
      <Header />
      <div className="login__continer">
        <FormLogin />
      </div>

    </>

    )
  } else {
    return <Navigate to='/' />
  }
}

export default Login