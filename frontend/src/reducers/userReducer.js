import { createSlice } from '@reduxjs/toolkit'
import loginService from '../services/login'

const initialState = null
const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
      setUser(state, action) {
        console.log('action.payload', action.payload)
        return action.payload
      }
    },
  })

export const loginUser = credentials => {
    return async dispatch => {
      const user = await loginService.userLogin(credentials)
      dispatch(setUser(user))
    }
  }

export const { setUser } = userSlice.actions

export default userSlice.reducer