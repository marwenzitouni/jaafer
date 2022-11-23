import axios from "axios";
import { GET_CURRENT_USER_FAIL, GET_CURRENT_USER_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTRE_FAIL, REGISTRE_SUCCESS } from "../consts/userConsts";

export const register = (newUser,navigate) => async (dispatch) => {
  try {
    const res = await axios.post(
      `http://localhost:5005/api/users/register`,
      newUser
    );
    dispatch({ type: REGISTRE_SUCCESS, payload: res.data });
    navigate("/login");
  } catch (error) {
    dispatch({ type: REGISTRE_FAIL, payload: error });
    console.log(error);
  }
};


export const login = (user, navigate) => async (dispatch) => {
  try {
    const res = await axios.post(
      `http://localhost:5005/api/users/login`,
      user
    );
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    navigate("/");
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error });
    console.log(error);
  }
};
export const getCurrentUser = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  try {
    const res = await axios.get(`http://localhost:5005/api/users/current`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: GET_CURRENT_USER_SUCCESS, payload: res.data });
    
  } catch (error) {
    dispatch({ type: GET_CURRENT_USER_FAIL, payload: error });
    console.log(error);
  }
}
export const logout = () => {
  
  return { type:LOGOUT}
}