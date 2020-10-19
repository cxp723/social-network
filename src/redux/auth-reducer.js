import { authAPI, profileAPI } from "../api/api";
import { resetSection, stopSubmit } from "redux-form";

let initialState = {
    id: null,
    email: null,
    login: null,
    name: null,
    photo: null,
    isAuth: false,
    captcha: null, 
    isFetching: false
}

export const setUserData = (id, email, login, isAuth) => ({ type: 'SET-USER-DATA', payload: {id, email, login, isAuth} });
const SET_USER_DATA = 'SET-USER-DATA';
export const setUserInfo = (name, photo) => ({ type: 'SET_USER_INFO', payload: {name, photo} });
const SET_USER_INFO = 'SET_USER_INFO';
const setCaptchaPicture = (captcha) => ({type: 'SET_CAPTCHA_PICTURE', payload: {captcha}});
const SET_CAPTCHA_PICTURE = 'SET_CAPTCHA_PICTURE';
const toggleIsFetching = (isFetching) => ({type: 'TOGGLE_IS_FETCHING', payload: {isFetching}});
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA: 
        case SET_USER_INFO:
        case SET_CAPTCHA_PICTURE:
        case TOGGLE_IS_FETCHING:
            return {...state, ...action.payload}

        default: return state;
    }
}

export const auth = () => {
    return (dispatch) => {
        return authAPI.auth().then((data) => {
            if (data.resultCode === 0) {
                dispatch(setUserData(data.data.id, data.data.email, data.data.login, true));
                profileAPI.getProfile(data.data.id).then((data) => {
                    dispatch(setUserInfo(data.fullName, data.photos.small));
                })
                dispatch(setCaptchaPicture(null));
            }
            dispatch(toggleIsFetching(false));
        })
    }
}
export const login = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let response = await authAPI.login(email, password, rememberMe, captcha);
        dispatch(resetSection('loginForm', ['captcha']))
        if (response.resultCode === 0) {
            dispatch(auth());
        } else {
            dispatch(stopSubmit("loginForm", { _error: response.messages[0] }));
            response.resultCode === 10 && dispatch(getCaptcha());
            dispatch(toggleIsFetching(false));
        }
    }
}
const getCaptcha = () => {
    return async (dispatch) => {
        let response = await authAPI.getCaptcha();
        dispatch(setCaptchaPicture(response.url));
    }
}
export const logout = () => {
    return async (dispatch) => {
        let response = await authAPI.logout()
        if (response.resultCode === 0) {
            dispatch(setUserData(null, null, null, false));
            dispatch(setUserInfo(null, null));
        }
    }
}

export default authReducer;