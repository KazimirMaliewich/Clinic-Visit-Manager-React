import React from 'react'
import { SignInForm } from '../../Components/SignInForm/SignInForm'
import { Link } from 'react-router-dom'
export const Signin = () => {
  return (
    <main>
      <SignInForm/>
      <p>If you don't have an account -- <Link to='/signup'>Sign Up</Link></p>
    </main>
  )
}
