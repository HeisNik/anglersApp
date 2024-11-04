import { useNavigate, Link } from 'react-router-dom'
import {
    TextField,Button
  } from '@mui/material'
import Home from './Home'
import signupService from '../services/signup'
import { setNotification } from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'
import Notification from "./Notification"
  
const SignUp = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const onSignUp = (event) => {
      event.preventDefault()
      const user = {
        firstname: event.target.firstname.value,
        lastname: event.target.lastname.value,
        email: event.target.email.value,
        username: event.target.username.value,
        password: event.target.password.value
      }
        event.target.firstname.value = ''
        event.target.lastname.value = ''
        event.target.email.value = ''
        event.target.username.value = ''
        event.target.password.value = ''
      signupService.userSignup(user)
        .then(() => {
        dispatch(setNotification('User created succesfully','success'))
        setTimeout(() => {
          navigate('/')
        }, 5000)
      })
        .catch((error) => {
        dispatch(setNotification(error.response.data.error,'error'))
    })
    }
  
    return (
      <div>
        <Home/>
        <img src="\Abstract%20Mascot%20Fishing%20Free%20Logo.png" width="300" height="250" alt="Anglers App logo" />
        <h2>Sign Up</h2>
        <Notification/>
        <form onSubmit={onSignUp}>
        <div>
            <TextField label="firstname" name="firstname"/>
          </div>
          <div>
            <TextField label="lastname" name="lastname"/>
          </div>
          <div>
            <TextField label="email" name="email"/>
          </div>
          <div>
            <TextField label="username" name="username" autoComplete="new-username"/>
          </div>
          <div>
            <TextField label="password" name="password" type='password' autoComplete="new-password" />
          </div>
          <div>
            <Button variant="contained" color="primary" type="submit">
              Sign Up
            </Button>
          </div>
          <div>
            <Link to={"/"}>Already have an account? Log in here</Link>
          </div>
        </form>
      </div>
    )
  }

export default SignUp