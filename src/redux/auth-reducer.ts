import { authAPI, AuthResponse, profileAPI, ResultCodes, ResultCodeWithCaptcha } from "../api/api";
import { FormAction, resetSection, stopSubmit } from "redux-form";
import { ActionsType } from "../types/types";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./redux-store";

const initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    name: null as string | null,
    photo: null as string | null,
    isAuth: false,
    captcha: null as string | null, 
    isFetching: false
}
type InitialStateType = typeof initialState;

const actions = {
    setUserData : (id: number | null, email: string | null, login: string | null, isAuth: boolean) =>
    ({ type: 'SET_USER_DATA', payload: {id, email, login, isAuth} } as const),
    setUserInfo : (name: string | null, photo: string | null) => ({ type: 'SET_USER_INFO', payload: {name, photo} } as const),
    setCaptchaPicture : (captcha: string | null) => ({type: 'SET_CAPTCHA_PICTURE', payload: {captcha}} as const),
    toggleIsFetching : (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', payload: {isFetching}} as const)
}

type AuthActionsType = ActionsType<typeof actions>

const authReducer = (state = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA': 
        case 'SET_USER_INFO':
        case 'SET_CAPTCHA_PICTURE':
        case 'TOGGLE_IS_FETCHING':
            return {...state, ...action.payload}

        default: return state;
    }
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, AuthActionsType | FormAction>


export const auth = (): ThunkType => {
    return (dispatch) => {
        return authAPI.auth().then((data: AuthResponse) => {
            if (data.resultCode === ResultCodes.Success) {
                dispatch(actions.setUserData(data.data.id, data.data.email, data.data.login, true));
                profileAPI.getProfile(data.data.id).then((data) => {
                    dispatch(actions.setUserInfo(data.fullName, data.photos.small));
                })
                dispatch(actions.setCaptchaPicture(null));
            }
            dispatch(actions.toggleIsFetching(false));
        })
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleIsFetching(true));
        let response = await authAPI.login(email, password, rememberMe, captcha);
        dispatch(resetSection('loginForm', 'captcha'))
        if (response.resultCode === ResultCodes.Success) {
            dispatch(auth());
        } else {
            dispatch(stopSubmit("loginForm", { _error: response.messages[0] }));
            response.resultCode === ResultCodeWithCaptcha.CaptchaRequired && dispatch(getCaptcha());
            dispatch(actions.toggleIsFetching(false));
        }
    }
}
const getCaptcha = (): ThunkType => {
    return async (dispatch) => {
        let response = await authAPI.getCaptcha();
        dispatch(actions.setCaptchaPicture(response.url));
    }
}
export const logout = (): ThunkType => {
    return async (dispatch) => {
        let response = await authAPI.logout()
        if (response.resultCode === ResultCodes.Success) {
            dispatch(actions.setUserData(null, null, null, false));
            dispatch(actions.setUserInfo(null, null));
        }
    }
}

export default authReducer;