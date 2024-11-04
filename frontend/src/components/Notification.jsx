import { useDispatch, useSelector } from 'react-redux'
import { clearNotification } from '../reducers/notificationReducer'
import { useEffect } from 'react'
import { Alert } from '@mui/material'

const Notification = () => {
  const dispatch = useDispatch()
  const notification = useSelector(state => state.notification)
  console.log('notification', notification)

  if (!notification.message) {
    return (
      <div>
      </div>
    )
  }

  return (
    <div>
      <Alert severity={notification.type === 'success' ? 'success' : 'error'}>
        {notification.message}
      </Alert>
    </div>
  )

}

export default Notification