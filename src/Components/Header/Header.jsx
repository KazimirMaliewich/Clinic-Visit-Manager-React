import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import { useSelector } from 'react-redux'
export const Header = () => {
  const isAuthenthificated = useSelector((state) => {
    return state.token.token
  })
  const handleLogout = async () => {

  }

  return (
    <header>
      { !isAuthenthificated ? <Link to='/signin'>Sign In</Link> :
      <><Link to='/profile'>Profile</Link>
      <Link to='/createcard'>Create Card</Link>
      <Button onClick={handleLogout} text='Log out' className='btn btn-primary' /></>}
    </header>
  )
}
