import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { Header } from '../../Components/Header/Header'
import { tokenRequestAction } from '../../store/actions/tokenActions'
export const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token){
      dispatch(tokenRequestAction(token))
    }
  })
  return (
    <div>
      Hello
    </div>
  )
}
