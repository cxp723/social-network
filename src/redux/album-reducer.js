import { getPhotosForAlbum } from './../api/api';

const initialState = {
    photos: [],
    numberOfPhotos: 12
}
const SET_PHOTOS = 'SET_PHOTOS'
const setPhotos = (photos) => ({type: 'SET_PHOTOS', photos})
export const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PHOTOS :
            return ({...state, photos: action.photos})
        default: return state
    }
}

export const getPhotos = (numberOfPhotos) => {
    return async (dispatch) => {
        let photos = await getPhotosForAlbum(numberOfPhotos);
        dispatch(setPhotos(photos));
    }
}