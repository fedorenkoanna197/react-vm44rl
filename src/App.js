import React from 'react';
import './style.css';
import Email from './components/Email/Email';
import Password from './components/Password/Password'
import ConfirmationPassword from './components/ConfirmationPassword/ConfirmationPassword'
import Submit from './components/Submit/Submit'
import {useUser} from './hooks/useUser'

export default function App() {
  const [changeEmail,changePassword,changePasswordConfirm,changeClick,result] = useUser()
  return (
    // result.length === 0 ?
      <form action="">
      <Email changeEmail={changeEmail} />
      <Password changePassword={changePassword}/>
      <ConfirmationPassword changePasswordConfirm={changePasswordConfirm}/>

      <Submit click={changeClick}/>
    </form> 
    // : result.map((ele)=>{<p>ele</p>})
    
    
  );
}
