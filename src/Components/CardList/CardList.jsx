
import { useSelector } from 'react-redux'
import { Card } from './Card/Card'

export const CardList = ({ openModal }) => {
  const cardsId = useSelector((state) => {
    return state.cards.cardsId
  })
  if(!cardsId.length){
    return <p>There is no Cards</p>
  }
  return (
    <ul>{cardsId.map((id) => <Card openModal={openModal} id={id} key={id}/>)}</ul>
  )
}
