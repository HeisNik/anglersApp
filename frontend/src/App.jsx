import { useState } from "react"
import { Container } from '@mui/material'
import UserNavigation from "./components/UserNavigation"
import Navigation from "./components/Navigation"
import Login from "./components/Login"
import SignUp from "./components/Signup"
import { Route, Routes } from 'react-router-dom'
import Home from "./components/Home"
import AppRouter from "./components/Router"
import { useDispatch, useSelector } from 'react-redux'



const App = () => {
  const user = useSelector(state => state.user)
  console.log('app state', user)

  return (
    <Container>
      {user ?
      <>
      <UserNavigation/>
      </>
       :
       <>
      <Navigation/>
      </>
    }
  <AppRouter/>
    </Container>
  )
}

export default App