import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const setUserData = (id, email, login, isAuth) => ({ type: 'SET-USER-DATA', id, email, login, isAuth });
const SET_USER_DATA = 'SET-USER-DATA';

let authReducer = (state = initialState, { type, id, email, login, isAuth }) => {
    let newState = { ...state };
    switch (type) {

        case SET_USER_DATA:
            newState.id = id;
            newState.email = email;
            newState.login = login;
            newState.isAuth = isAuth;
            return newState;

        default: return newState;
    }
}

export const auth = () => {
    return (dispatch) => {
        return authAPI.auth().then((data) => {
            if (data.resultCode === 0) {
                dispatch(setUserData(data.data.id, data.data.email, data.data.login, true));
            }
        })
    }
}
export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe)
        response.resultCode === 0
            ? dispatch(auth())
            : dispatch(stopSubmit("loginForm", { _error: response.messages[0] }));
    }
}

export const logout = () => {
    return async (dispatch) => {
        let response = await authAPI.logout()
        response.resultCode === 0 && dispatch(setUserData(null, null, null, false));
    }
}

export default authReducer;