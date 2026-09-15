import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { tokenRequestAction } from '../../store/actions/tokenActions'
import { fetchExpiredToken } from '../../API/fetchExpiredToken'
import { useNavigate } from 'react-router-dom'
export const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {

    const init = async () => {
      const token = await dispatch(fetchExpiredToken())

      if (token) {
        dispatch(tokenRequestAction(token))
      }
      else{
        navigate("/signin")
      }
    }
    init()
  }, [])
  return (
    <div>
      Hello
    </div>
  )
}
