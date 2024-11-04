import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import notificationReducer from './reducers/notificationReducer'



export const store = configureStore({
    reducer: {
      user: userReducer,
      notification: notificationReducer
    },
  })