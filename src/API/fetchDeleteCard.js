import { URL } from "../constant/constant";
import { cardDeletebyID, cardsRequestAction, cardsErrorAction } from "../store/actions/cardsActions";

export const fetchDeleteCard = (id) => {
    return async (dispatch, getStore) =>{
        dispatch(cardsRequestAction());
        const store = getStore()
        const token = store.token.token
        try{
            const response = await fetch(
                `${URL}/api/cards/${id}`,
                {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${token}`
                    }
                }
            )
            const data = await response.json()

            dispatch(cardDeletebyID(data))
        }
        catch(error){
            dispatch(cardsErrorAction(error))

        }
    }
}