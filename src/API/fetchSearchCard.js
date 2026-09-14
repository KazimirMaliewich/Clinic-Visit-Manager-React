import { URL } from "../constant/constant";
import { searchCardAction, cardsRequestAction, cardsErrorAction } from "../store/actions/cardsActions";

export const fetchSearchCard = (formData) => {
    return async (dispatch, getStore) => {
        dispatch(cardsRequestAction());
        const store = getStore();
        const token = store.token.token;
        const params = new URLSearchParams();

        Object.entries(formData).forEach(([key, value]) => {
            if (value) {
                params.set(key, value);
            }
        });

        try {
            const response = await fetch(
                `${URL}/api/cards/search?${params.toString()}`,
                {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${token}`
                    },
                }
            );

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Search failed');
            }

            dispatch(searchCardAction(data));
        } catch (error) {
            dispatch(cardsErrorAction(error));
        }
    }
}