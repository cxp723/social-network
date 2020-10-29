import { getPhotosForAlbum } from './../api/api';

const initialState = {
    photos: [],
    numberOfPhotos: 12,
    isFetching: false
}
const SET_PHOTOS = 'SET_PHOTOS'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'

const setPhotos = (photos) => ({type: 'SET_PHOTOS', photos})
const toggleFetching = (isFetching) => ({type: 'TOGGLE_FETCHING', isFetching})

export const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PHOTOS :
            return ({...state, photos: action.photos})
        case TOGGLE_FETCHING :
            return ({...state, isFetching: action.isFetching})
        default: return state
    }
}

export const getPhotos = (numberOfPhotos, page) => {
    return async (dispatch) => {
        dispatch(toggleFetching(true));
        let photos = await getPhotosForAlbum(numberOfPhotos, page);
        dispatch(setPhotos(photos));
        dispatch(toggleFetching(false));
    }
}