import { auth } from './auth-reducer';

const initializeSuccess = () => {return ({type: INITIALIZE_SUCCESS})}
const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS';

const initialState = {
    initialized: false
}
export const appReducer = (state = initialState, action) => {
    let newState = {...state}
    switch (action.type) {
    case INITIALIZE_SUCCESS :
        newState.initialized = true;
        return newState;
    
    default: return newState;
    }
}

export const initializing = () => {
    return async (dispatch) => {
        await dispatch(auth());
        dispatch(initializeSuccess());
    }
}