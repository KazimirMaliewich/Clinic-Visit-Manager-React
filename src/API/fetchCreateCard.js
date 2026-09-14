import { URL } from "../constant/constant";
import { cardsRequestAction, cardsSuccessAction, cardsErrorAction, cardsCreateSuccessAction } from "../store/actions/cardsActions";
export const fetchCreateCard = (formData) => {
    return async (dispatch, getStore) => {
        dispatch(cardsRequestAction());
        const store = getStore()
        const token = store.token.token

        try {
           const response = await fetch(
                `${URL}/api/cards`,
                {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/json",
                        authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify(formData)
                }
            )

            const data = await response.json()
            if(response.status >= 400){

                throw new Error(data.message)
            }
            dispatch(cardsCreateSuccessAction(data))
            return data
        }catch(error){
            
            dispatch(cardsErrorAction(error.message))
        }
    }
}