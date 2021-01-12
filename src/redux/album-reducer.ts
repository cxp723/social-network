import { getPhotosForAlbum } from '../api/api';
import {ActionsType, AlbumPhotoType, BaseThunkType} from './../types/types'


const initialState = {
    photos: [] as Array<AlbumPhotoType>,
    numberOfPhotos: 12,
    isFetching: false
}
type initialStateType = typeof initialState;
type ThunkType = BaseThunkType<AlbumActionsType>
type AlbumActionsType = ActionsType<typeof actions>

const actions = {
    setPhotos : (photos: Array<AlbumPhotoType>) => ({type: 'SET_PHOTOS', photos} as const),
    toggleFetching : (isFetching: boolean) => ({type: 'TOGGLE_FETCHING', isFetching} as const)
}


export const albumReducer = (state = initialState, action: AlbumActionsType) : initialStateType => {
    switch (action.type) {
        case 'SET_PHOTOS' :
            return ({...state, photos: action.photos})
        case 'TOGGLE_FETCHING' :
            return ({...state, isFetching: action.isFetching})
        default: return state
    }
}

export const getPhotos = (numberOfPhotos: number, page: number): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleFetching(true));
        let photos = await getPhotosForAlbum(numberOfPhotos, page);
        dispatch(actions.setPhotos(photos));
        dispatch(actions.toggleFetching(false));
    }
}