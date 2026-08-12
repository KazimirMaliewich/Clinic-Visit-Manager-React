import { URL } from "../constant/constant";
import { cardsRequestAction, cardsSuccessAction, cardsErrorAction } from "../store/actions/cardsActions"
export const fetchCards = () => {
    return async (dispatch, getStore) => {
        dispatch(cardsRequestAction());
        const store = getStore()
        const token = store.token.token
        try {
            const response = await fetch(
                `${URL}/api/cards`,
                {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${token}`
                    }
                    
                }
            )
            const data = await response.json()
            dispatch(cardsSuccessAction(data))
            console.log(data, 444)
        } catch (error) {
            dispatch(cardsErrorAction(error))
            console.log(error)
        }
    }

}