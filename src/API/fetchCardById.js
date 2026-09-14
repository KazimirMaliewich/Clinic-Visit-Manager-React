import { URL } from "../constant/constant";
import { cardsGetById, cardsRequestAction,  cardsErrorAction} from "../store/actions/cardsActions"

export const fetchCardById = (id) => {
    return async (dispatch, getStore) => {
        dispatch(cardsRequestAction());
        const store = getStore()
        const token = store.token.token
        try {
            const response = await fetch(
                `${URL}/api/cards/${id}`,
                {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${token}`
                    }
                }
            )
            const data = await response.json()
            dispatch(cardsGetById(data))
        }
        catch (error) {
            dispatch(cardsErrorAction(error))
        }
    }
}