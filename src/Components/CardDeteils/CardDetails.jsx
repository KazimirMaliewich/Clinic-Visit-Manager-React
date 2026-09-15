
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { formatTime } from '../../utills/utills'
import { Button } from '../Button/Button'
export const CardDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const card = useSelector((state) => state.cards.cards[id])
const handleClick = (e) => {
        navigate(-1)
    }
  if (!card) return <div>No card data</div>
    
  return(
    <section>
        <Button text='Return' onClick={handleClick} className='button returnButton'/>
        <p>Full name: {card.fullName}</p>
        {card.age >= 0 && <p>Age: {card.age}</p>}
        <p>Description: card.description</p>
        <p>Doctor: {card.doctor.name}</p>
        <p>Doctor: {card.doctor.speciality}</p>
        {card.heartPressure && <p>Heart Pressure: {card.heartPressure}</p>}
        {card.heartIllnesses && <p>Heart Diseases: {card.heartIllnesses}</p>}
        {card.lastVisitDate && <p>Last visit date: {formatTime(card.lastVisitDate)}</p>}
        <p>Priority: {card.priority}</p>
        <p>Visit date: {formatTime(card.visitDate)}</p>
        <p>Visit goal: {card.visitGoal}</p>
        {card.weight && <p>Weight: {card.weight}</p>}
    </section>
  )
}
