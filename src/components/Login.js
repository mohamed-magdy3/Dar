import React from 'react'
import '../css/Login.css'
import { Link } from 'react-router-dom'


const Login = () => {

  // document.body.style.backgroundImage(url('../assets/logo2.png'));

  return (
    <div className='form-container'>
      <img src={require('../assets/3.jpg')} alt="" className='bg-login' />
      
        <div  className='login-logo'>
        <Link to='/' >
          <img src={require('../assets/logo2.png')} alt=""/>
          </Link>
        </div>
      



      <form className='form'>
        <div className='inp-with-icon'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" /></svg>
          <input type="text" name="name" placeholder='اسم الطالب' />
        </div>
        <div className='inp-with-icon'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" /></svg>
          <input type="password" name='password' placeholder='كلمة السر' />
        </div>
        <Link className='text-success'>هل نسيت كلمة السر ؟</Link>
        <input type="submit" value="تسجيل الدخول" placeholder='' className='submit' />

      </form>
    </div>
  )
}

export default Login
