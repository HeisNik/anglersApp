import { useNavigate, Link } from 'react-router-dom'
import {
    TextField,Button
  } from '@mui/material'
import Home from './Home'
import { useDispatch } from 'react-redux'
import {loginUser} from "../reducers/userReducer"
import Notification from "./Notification"
import { setNotification } from '../reducers/notificationReducer'
  
const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const onLogin = (event) => {
      event.preventDefault()
      
      const user = {
        username: event.target.username.value,
        password: event.target.password.value
      }
        event.target.username.value = ''
        event.target.password.value = ''
        console.log('typeof user',user)
        dispatch(loginUser(user))
        console.log('onnistui')
        /*
      dispatch(loginUser(user))
      .then((response) => {
        window.localStorage.setItem(
          'loggedAnglerappUser', JSON.stringify(response)
        ) 
        dispatch(setNotification(`Welcome ${user.username}`,'success'))
      })
        .catch((error) => {
        dispatch(setNotification(error.response.data.error,'error'))
    })*/
    }
  
    return (
      <div>
        <Home/>
        <img src="\Abstract%20Mascot%20Fishing%20Free%20Logo.png" width="300" height="250" alt="Anglers App logo" />
        <h2>Login</h2>
        <Notification/>
        <form onSubmit={onLogin}>
          <div>
            <TextField label="username" name="username" autoComplete="current-username"/>
          </div>
          <div>
            <TextField label="password" name='password' type='password' autoComplete="current-password" />
          </div>
          <div>
            <Button variant="contained" color="primary" type="submit">
              login
            </Button>
          </div>
          <div>
            <Link to={"/signup"}>Dont have an account? Sign up here</Link>
          </div>
        </form>
      </div>
    )
  }

export default Login