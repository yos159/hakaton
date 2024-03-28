import React, {useState} from 'react'
import './login.css'
export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => 
    {

        

}
  return (
    <div className='container'>

   
        <div className="login_box text-center">
        <form action="#">
        <h1 className='text-danger text_login'>Login</h1>
        <input value={email} onChange={(e)=>setEmail(e.targeg.value)}type="email" placeholder='Email@Mail.com' /><br />
        <input value={password}onChange={(e)=>setPassword(e.targeg.value)}type="password" placeholder='Password'/><br />
        <button>Login</button>
        </form>
        </div>
       
    </div>
  )
}
