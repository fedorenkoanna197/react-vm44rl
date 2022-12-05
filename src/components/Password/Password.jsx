import React from 'react'
import {useState} from 'react'
const Password = ({changePassword}) =>{
  const [message, setMessage] = useState(true)
  return(
    <label htmlFor="password">
      Enter password
      <input type="password" id='password' required onChange={(e)=>{changePassword(e.target.value),setMessage(false)}}/>
      {message && <span>Fill in the field</span>}
    </label>
  )
}

export default Password