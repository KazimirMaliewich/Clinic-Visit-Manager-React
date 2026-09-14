import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchCardById } from '../../API/fetchCardById'
import { CardDetails } from '../../Components/CardDeteils/CardDetails'

export const CardDetailsPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCardById(id))
  }, [id])

  return (
    <div>
      <CardDetails />
    </div>
  )
}

//id