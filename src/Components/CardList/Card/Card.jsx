import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from '../../Button/Button'
import { Modal } from '../../Modal/Modal'
import { setCardId } from '../../../store/actions/cardsActions'
import { useDispatch } from 'react-redux'
export const Card = ({id, openModal}) => {
  const dispatch = useDispatch()
  const [IsMoreInputs, setMoreInputs] = useState(false)

  const card = useSelector((state) => {
    return state.cards.cards[id]
  })

  
  return (
    <li>
      <p>Name: {card.fullName}</p>
      <p>Visit date: {card.visitDate}</p>
      <p>Priority: {card.priority}</p>
      <p>Description: {card.description}</p>

      {IsMoreInputs && (
        <div>
          {card.doctor === 'cardiologist' && (
            <>
              <p>Pressure: {card.heartPressure}</p>
              <p>Weight: {card.weight}</p>
              <p>Diseases: {card.heartIllnesses}</p>
              <p>Age: {card.age}</p>
            </>
          )}

          {card.doctor === 'dentist' && (
            <p>Last Visit: {card.lastVisitDate}</p>
          )}

          {card.doctor === 'therapist' && (
            <p>Age: {card.age}</p>
          )}
        </div>
      )}

      <Link to={`/cards/${id}`}>Show more</Link>
      <Button text='Delete' className='button buttonDelete' onClick={() => {
        openModal()
        dispatch(setCardId(id))
        } }/>
        <Link to={`/cards/update-cards/${id}`}>Update card</Link>
    </li>
  )
}
