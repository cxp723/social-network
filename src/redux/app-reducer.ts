import { ActionsType, BaseThunkType } from '../types/types';
import { auth } from './auth-reducer';

type AppActionsType = ActionsType<typeof appActions>
type ThunkType = BaseThunkType<AppActionsType>
type InitialStateType = typeof initialState

const appActions = {
    initializeSuccess : () => ({type: 'INITIALIZE_SUCCESS'})
}
const initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
    case 'INITIALIZE_SUCCESS' :
        return {...state, initialized: true}    
    default: return state;
    }
}

export const initializing = (): ThunkType => {
    return async (dispatch) => {
        await dispatch(auth());
        dispatch(appActions.initializeSuccess());
    }
}