import React from 'react'
import {useState} from 'react'
const Email = ({changeEmail}) =>{
  const [message, setMessage] = useState(true)
  return(
    <label htmlFor='email'>
      Enter email
      <input type="email" id='email' required onChange={(e)=>{changeEmail(e.target.value), setMessage(false)}} />
      {message && <span>Fill in the field</span>}
    </label>
     
  )
}
export default Email