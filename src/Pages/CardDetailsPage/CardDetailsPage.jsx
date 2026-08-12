import React from 'react'
import { useParams } from 'react-router-dom'

export const CardDetailsPage = () => {
const {id} = useParams()
console.log(id)
  return (
    <div>CardDetailsPage</div>
  )
}

//id