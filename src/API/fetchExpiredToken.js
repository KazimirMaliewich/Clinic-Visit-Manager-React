import { URL } from "../constant/constant";
import { tokenRequestAction, tokenErrorAction, tokenExpireMessageAction } from "../store/actions/tokenActions";
export const fetchExpiredToken = () => {
    return async (dispatch, getStore) => {
        dispatch(tokenRequestAction());
        const store = getStore()
        const token = store.token.token
        try {
            const response = await fetch(
                `${URL}/api/auth/check-expired-token`,
                {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${token}`
                    }
                }
            );
            const data = await response.json();
            dispatch(tokenExpireMessageAction(data))
        }
        catch (error) {
            dispatch(tokenErrorAction(error))

        }
    }
}