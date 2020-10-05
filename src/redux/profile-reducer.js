import { profileAPI } from './../api/api';

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';
const TOGGLE_PRELOADER = 'TOGGLE-PRELOADER';
const DELETE_POST = 'DELETE-POST';
export const deletePost = (id) => ({type: DELETE_POST, id});
export const addPost = (text) => ({ type: ADD_POST, text });
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const togglePreloader = (fetching) => { return { type: 'TOGGLE-PRELOADER', fetching } };
const initialState = {
    profile: null,
    status: '',
    posts:
        [{ message: "It's my first post", id: 1, likesCount: 16 },
        { message: "React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library[3] for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing.[7][8] Redux[9] and React Router[10] are respective examples of such libraries.", id: 2, likesCount: 15 },
        { message: "The Greeter function is a React component that accepts a property greeting. The variable App is an instance of the Greeter component where the greeting property is set to 'Hello World!'. The ReactDOM.render method then renders our Greeter component inside the DOM element with id myReactApp.When displayed in a web browser the result will be", id: 3, likesCount: 10 },
        { message: "Virtual DOM Another notable feature is the use of a virtual Document Object Model, or virtual DOM. React creates an in-memory data-structure cache, computes the resulting differences, and then updates the browser's displayed DOM efficiently.[12]. This process is called reconciliation. This allows the programmer to write code as if the entire page is rendered on each change, while the React libraries only render subcomponents that actually change. This selective rendering provides a major performance boost. It saves the effort of recalculating the CSS style, layout for the page and rendering for the entire page.", id: 4, likesCount: 8 },
        { message: "Lifecycle methods use a form of hooking that allows execution of code at set points during a component's lifetime.", id: 5, likesCount: 15 },
        { message: "shouldComponentUpdate allows the developer to prevent unnecessary re-rendering of a component by returning false if a render is not required.", id: 6, likesCount: 20 },
        { message: "React rules!", id: 7, likesCount: 13 },
    ],
    fetching: false
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                message: action.text, id: 3, likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
            case DELETE_POST :
                return {...state, posts: state.posts.filter(post => post.id !== action.id)}
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
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
        default: return state;
    }
}

export const getProfileWithStatus = (profileId) => {
    return async (dispatch) => {
        dispatch(togglePreloader(true));
        await dispatch (getProfile(profileId));
        await dispatch (getStatus(profileId));
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
export default profileReducer;