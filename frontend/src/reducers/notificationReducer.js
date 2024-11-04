import { createSlice } from '@reduxjs/toolkit'

const initialState = {message: null, type: null}

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
      makeNotification(state, action) {
        console.log('action', state)
        return action.payload
      },
      clearNotification(state, action) {
        return { message: null, type: null }
      }
    },
})

export const setNotification = (message, type) => {
  return async dispatch => {
    dispatch(makeNotification({message, type}))
    setTimeout(() => {
      dispatch(clearNotification())
      }, 5000)
    }
} 

export const {makeNotification, clearNotification} = notificationSlice.actions
export default notificationSlice.reducer

