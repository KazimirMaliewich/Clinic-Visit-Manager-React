import { URL } from "../constant/constant"; 
import { updateCardAction, cardsRequestAction, cardsErrorAction } from "../store/actions/cardsActions";

export const fetchUpdateCard = (formData, id) => {
    return async (dispatch, getStore) => {
        dispatch(cardsRequestAction());
        const store = getStore()
        const token = store.token.token
        try{
            const response = await fetch(
                `${URL}/api/cards/${id}`,
                {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify(formData)
                }
            )
            const data = await response.json()
            dispatch(updateCardAction(data))
            return data
        }
        catch (error) {
            dispatch(cardsErrorAction(error))
        }
    }
}