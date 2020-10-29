import { profileAPI } from './../api/api';
import { stopSubmit } from 'redux-form';

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';
const TOGGLE_PRELOADER = 'TOGGLE-PRELOADER';
const DELETE_POST = 'DELETE-POST';
const SAVE_PHOTO = 'SAVE_PHOTO';
const LIKE_POST = 'LIKE_POST';
const TOGGLE_UPLOADING = 'TOGGLE_UPLOADING';
const TOGGLE_UPDATING = 'TOGGLE_UPDATING';
const UPDATING_PROFILE = 'UPDATING_PROFILE';
export const deletePost = (id) => ({ type: DELETE_POST, id });
export const addPost = (text) => ({ type: ADD_POST, text });
export const likePost = (id) => ({ type: LIKE_POST, id });
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const setPhoto = (photos) => ({ type: SAVE_PHOTO, photos });
export const togglePreloader = (fetching) => { return { type: 'TOGGLE-PRELOADER', fetching } };
export const toggleUploading = () => { return { type: 'TOGGLE_UPLOADING' } };
const toggleUpdating = (isFetching) => { return { type: 'TOGGLE_UPDATING', isFetching } };
export const updatingProfileInProcess = (updating) => { return { type: 'UPDATING_PROFILE', updating } };
const initialState = {
    profile: null,
    status: '',
    //Hardcoded posts
    posts:
        [{ message: "Hooks don’t replace your knowledge of React concepts. Instead, Hooks provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle. As we will show later, Hooks also offer a new powerful way to combine them.", id: 1, likesCount: 16, date: new Date(2020, 1, 1) },
        { message: "Hooks solve a wide variety of seemingly unconnected problems in React that we’ve encountered over five years of writing and maintaining tens of thousands of components. Whether you’re learning React, use it daily, or even prefer a different library with a similar component model, you might recognize some of these problems.", id: 2, likesCount: 15, date: new Date(2020, 3, 24) },
        { message: "React doesn’t offer a way to “attach” reusable behavior to a component (for example, connecting it to a store). If you’ve worked with React for a while, you may be familiar with patterns like render props and higher-order components that try to solve this. But these patterns require you to restructure your components when you use them, which can be cumbersome and make code harder to follow. If you look at a typical React application in React DevTools, you will likely find a “wrapper hell” of components surrounded by layers of providers, consumers, higher-order components, render props, and other abstractions. While we could filter them out in DevTools, this points to a deeper underlying problem: React needs a better primitive for sharing stateful logic.", id: 3, likesCount: 10, date: new Date(2020, 6, 12) },
        { message: "We’ve often had to maintain components that started out simple but grew into an unmanageable mess of stateful logic and side effects. Each lifecycle method often contains a mix of unrelated logic. For example, components might perform some data fetching in componentDidMount and componentDidUpdate. However, the same componentDidMount method might also contain some unrelated logic that sets up event listeners, with cleanup performed in componentWillUnmount. Mutually related code that changes together gets split apart, but completely unrelated code ends up combined in a single method. This makes it too easy to introduce bugs and inconsistencies.", id: 4, likesCount: 8, date: new Date(2020, 7, 7) },
        { message: "In addition to making code reuse and code organization more difficult, we’ve found that classes can be a large barrier to learning React. You have to understand how this works in JavaScript, which is very different from how it works in most languages. You have to remember to bind the event handlers. Without unstable syntax proposals, the code is very verbose. People can understand props, state, and top-down data flow perfectly well but still struggle with classes. The distinction between function and class components in React and when to use each one leads to disagreements even between experienced React developers.", id: 5, likesCount: 15, date: new Date(2020, 7, 11) },
        { message: "Additionally, React has been out for about five years, and we want to make sure it stays relevant in the next five years. As Svelte, Angular, Glimmer, and others show, ahead-of-time compilation of components has a lot of future potential. Especially if it’s not limited to templates. Recently, we’ve been experimenting with component folding using Prepack, and we’ve seen promising early results. However, we found that class components can encourage unintentional patterns that make these optimizations fall back to a slower path. Classes present issues for today’s tools, too. For example, classes don’t minify very well, and they make hot reloading flaky and unreliable. We want to present an API that makes it more likely for code to stay on the optimizable path.", id: 6, likesCount: 20, date: new Date(2020, 8, 12) },
        { message: "Conceptually, React components have always been closer to functions. Hooks embrace functions, but without sacrificing the practical spirit of React. Hooks provide access to imperative escape hatches and don’t require you to learn complex functional or reactive programming techniques.", id: 7, likesCount: 13, date: new Date(2020, 9, 12) },
        ],
    fetching: false,
    uploadingPhoto: false,
    updatingProfile: false,
    updateFetching: false
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                message: action.text, id: state.posts[state.posts.length - 1].id + 1, likesCount: 0, date: new Date()
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        case DELETE_POST:
            return { ...state, posts: state.posts.filter(post => post.id !== action.id) }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case LIKE_POST:
            return {
                ...state,
                posts: state.posts.map(post => {
                    post.id === action.id && post.likesCount++;
                    return post;
                })
            };
        case SAVE_PHOTO:
            return { ...state, profile: { ...state.profile, photos: action.photos } }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case TOGGLE_PRELOADER:
            return {
                ...state,
                fetching: action.fetching
            };
        case TOGGLE_UPLOADING:
            return {
                ...state,
                uploadingPhoto: !state.uploadingPhoto
            };
        case TOGGLE_UPDATING:
            return {
                ...state,
                updateFetching: action.isFetching
            };
        case UPDATING_PROFILE:
            return {
                ...state,
                updatingProfile: action.updating
            };
        default: return state;
    }
}

export const getProfileWithStatus = (profileId) => {
    return async (dispatch) => {
        dispatch(togglePreloader(true));
        await dispatch(getProfile(profileId));
        await dispatch(getStatus(profileId));
        dispatch(togglePreloader(false));
    }
}
export const getProfile = (profileId) => {
    return async (dispatch) => {
        let data = await profileAPI.getProfile(profileId);
        dispatch(setProfile(data));
    }
}
export const getStatus = (profileId) => {
    return async (dispatch) => {
        let data = await profileAPI.getStatus(profileId);
        dispatch(setStatus(data));
    }
}
export const updateStatus = (status) => {
    return async (dispatch) => {
        let data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
}
export const savePhoto = (photoFile) => {
    return async (dispatch) => {
        dispatch(toggleUploading());
        let response = await profileAPI.uploadPhoto(photoFile);
        if (response.resultCode === 0) dispatch(setPhoto(response.data.photos));
        dispatch(toggleUploading());
    }
}
export const updateProfile = (data, me) => {
    
    const parseErrorObject = (errors) => {
        let errorsObject = {};
        errors.forEach((error) => {
            let element = '';
            let message = '';
            let errorInArray = error.split(' ');
            let lastElement = errorInArray[errorInArray.length - 1];
            if (lastElement.search(/->/) > 0) {
                element = lastElement.slice(lastElement.search(/->/) + 2, -1)
                element = 'contacts.' + element[0].toLowerCase() + element.substring(1);
            } else {
                element = lastElement.slice(1, -1);
                element = element[0].toLowerCase() + element.substring(1);
            }
            message = error.split('(')[0];

            errorsObject[element] = message;
            console.log(errorsObject);
        })
        return errorsObject;
    }
    return async (dispatch) => {
        dispatch(toggleUpdating(true));
        let response = await profileAPI.setProfile(data);
        if (response.resultCode === 0) {
            dispatch(getProfile(me));
            dispatch(updatingProfileInProcess(false))
        } else {
            dispatch(stopSubmit('edit-profile', parseErrorObject(response.messages)))
        }
        dispatch(toggleUpdating(false));
    }
}
export default profileReducer;