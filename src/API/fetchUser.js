import { URL } from "../constant/constant";
import { userRequestAction, userSuccessAction, userErrorAction } from "../store/actions/userActions";
export const fetchUser = () => {
  return async (dispatch) => {
    dispatch(userRequestAction());

    try {
      const response = await fetch(
        URL
      );

      const data = await response.json();

      dispatch(userSuccessAction(data));
    } catch (error) {
      dispatch(userErrorAction(error.message));
    }
  };
};