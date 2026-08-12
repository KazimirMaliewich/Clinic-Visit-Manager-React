import React, { useEffect } from 'react'
import { CardList } from '../../Components/CardList/CardList'
import { fetchCards } from '../../API/fetchCards'
import { useDispatch } from 'react-redux'
export const Cards = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    console.log(111)
    dispatch(fetchCards())
  }, [])
  return (
    <div>
      <CardList/>
    </div>
  )
}
