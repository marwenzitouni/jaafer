import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateUser = ({children}) => {
  return (
    <div>
        {localStorage.getItem('token')? children:<Navigate to="/login" />}
    </div>
  )
}

export default PrivateUser