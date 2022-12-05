import React from 'react'
import {useState} from 'react'
const ConfirmationPassword = ({changePasswordConfirm}) =>{
  const [message, setMessage] = useState(true)
  return(
    <label htmlFor="confirmation">
      Confirmation password
      <input type="password" id='confirmation' required onChange={(e)=>{changePasswordConfirm(e.target.value),setMessage(false)}}/>
      {message && <span>Fill in the field</span>}
    </label>
  )
}
export default ConfirmationPassword