import Login from "./Login"
import SignUp from "./Signup"
import { Route, Routes } from 'react-router-dom'
import Home from "./Home"

const AppRouter = () => {
    return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    )
}

export default AppRouter