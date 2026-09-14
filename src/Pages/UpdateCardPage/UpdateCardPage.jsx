import React from 'react'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCardById } from '../../API/fetchCardById';
import { CardForm } from '../../Components/CardForm/CardForm';
export const UpdateCardPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams()
    useEffect(() => {
        dispatch(fetchCardById(id))
    }, [id])
  return (
    <CardForm/>
  )
}
