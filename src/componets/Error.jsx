import React from 'react'
import '../CSS/Error.css' 

const Error = ({ message }) => (
  <div className="error-container">
    <p>{message}</p>
  </div>
)

export default Error
