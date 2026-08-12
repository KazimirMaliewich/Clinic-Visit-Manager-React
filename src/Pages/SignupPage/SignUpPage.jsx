import React from 'react'
import { SignUpForm } from '../../Components/SignUpForm/SignUpForm'
import { Link } from 'react-router-dom'
export const SignUp = () => {
  return (
    <main>
      <SignUpForm/>
      <p>If you have a account -- <Link to='/signin'>Sign In</Link></p>
    </main>
    
  )
}
