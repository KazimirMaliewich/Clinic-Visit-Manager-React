import React, { useEffect, useState } from 'react'
import { CardList } from '../../Components/CardList/CardList'
import { fetchCards } from '../../API/fetchCards'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { Button } from '../../Components/Button/Button'
import { Modal } from '../../Components/Modal/Modal'
import { fetchDeleteCard } from '../../API/fetchDeleteCard'
import { setCardId } from '../../store/actions/cardsActions'
export const Cards = () => {
  const dispatch = useDispatch()
  const [isShown, setIsShown] = useState(false);
  const selectedId = useSelector((store) => store.cards.cardId)
  useEffect(() => {
    dispatch(fetchCards())
  }, [])
  const openModal = (id) => {
    setIsShown(true)
  }
  const closeModal = () => {
    setIsShown(false)
  }
  const handleSubmit = () => {

    if (selectedId) {
      dispatch(fetchDeleteCard(selectedId))
    }
    closeModal()
    dispatch(setCardId(null))
  }
  return (
    <div>
      <CardList openModal={openModal}/>
      <Modal title="Delete Card" text="Do you really want to delete this card?"
        onClose={closeModal} isShown={isShown} children={<>
          <Button text="Confirm" onClick={handleSubmit} className="" />
          <Button text="Cancel" onClick={closeModal} className='' />
        </>} />
    </div>
  )
}
