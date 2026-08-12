import { URL } from "../constant/constant";
import { tokenRequestAction, tokenSuccessAction, tokenErrorAction } from "../store/actions/tokenActions";
export const fetchToken = (formData, authUrl) => {
  return async (dispatch) => {
    dispatch(tokenRequestAction());

    try {
      const response = await fetch(
        `${URL}/api/auth/${authUrl}`,
        {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();
      localStorage.setItem('token', data.token)
      dispatch(tokenSuccessAction(data.token));
    } catch (error) {
      dispatch(tokenErrorAction(error.message));
    }
  };
};