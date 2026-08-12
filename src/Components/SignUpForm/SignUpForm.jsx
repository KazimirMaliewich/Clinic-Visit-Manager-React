import React, { useEffect, useState } from 'react'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import { fetchToken } from '../../API/fetchToken'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export const SignUpForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isSubmit, setSubmit] = useState(false)
    const [error, setError] = useState({}) 
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        const error = {}
        if(isSubmit){
            if(password !== confirmPassword){
                error.confirmPassword = 'Password must be the same!!!'
            }
        }
        setError(error)
    }, [])
      const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmit(true)
        if(error.confirmPassword){
            return 
        }
        const token = await dispatch(fetchToken({fullName, phoneNumber, email, password}, 'signup'))
        navigate("/cards")
      }

      const handleReset = (e) => {
        e.preventDefault()
        setFullName("")
        setPhoneNumber("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setError({})
      }
  return (
    <form onSubmit={handleSubmit}>
        <Input type='text' placeholder='Enter your full name' label='Full Name'
        name='fullname' value={fullName} onChange={setFullName} id='fullname'/>
        <Input type='text' placeholder='+1234567890' label='Phone Number'
        name='phoneNumber' value={phoneNumber} onChange={setPhoneNumber} id={phoneNumber}/>
        <Input type='email' placeholder='*@gmail.com' label='Email' 
      name='email' value={email} onChange={setEmail} id='email'/>
        <Input type='password' placeholder='enter your password' label='Password' 
      name='password' value={password} onChange={setPassword} id='password'/>
        <Input type='password' placeholder='repeat your password' label='Repeat Password' 
      name='confirmPassword' value={confirmPassword} onChange={setConfirmPassword} id='confirmPassword' error={error.confirmPassword}/>
        <Button type='submit' text='Submit'/>
        <Button type='reset' text='Cancel' onClick={handleReset}/>
    </form>
  )
}
