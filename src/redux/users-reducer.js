import { followAPI, usersAPI } from './../api/api';
import { changeValuesInArray } from './../Utils/Array-changers';

const initialState = {
    users: [],
    usersTotalCount: 0,
    currentPage: 1,
    pageSize: 5,
    paginationButtonsCount: 10,
    isFetching: false,
    followingUsers: []
}

const FOLLOW_SUCCESS = 'FOLLOW';
const UNFOLLOW_SUCCESS = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const INCREASE_PAGE_SIZE = 'INCREASE-PAGE-SIZE';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT';
const TOGGLE_PRELOADER = 'TOGGLE-PRELOADER';
const TOGGLE_FOLLOWING_BUTTON = 'TOGGLE_FOLLOWING_BUTTON'

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_SUCCESS:
            return { ...state, users: changeValuesInArray(state.users, 'id', action.userId, 'followed', true) }
        case UNFOLLOW_SUCCESS:
            return { ...state, users: changeValuesInArray(state.users, 'id', action.userId, 'followed', false) }
        case INCREASE_PAGE_SIZE:
            return { ...state, pageSize: state.pageSize + 5 };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };
        case SET_USERS_TOTAL_COUNT:
            return { ...state, usersTotalCount: action.usersTotalCount };
        case SET_USERS:
            return { ...state, users: [...action.users] };
        case TOGGLE_PRELOADER:
            return { ...state, isFetching: action.isFetching ? true : false };
        case TOGGLE_FOLLOWING_BUTTON:
            return {
                ...state, followingUsers: state.followingUsers.some((user) => user === action.userId)
                    ? state.followingUsers.filter(user => user !== action.userId)
                    : state.followingUsers.concat(action.userId)
            };
        default: return { ...state };
    }
}
//Action creators
export const followSuccess = (userId) => { return { type: 'FOLLOW', userId } };
export const unfollowSuccess = (userId) => { return { type: 'UNFOLLOW', userId } };
export const setUsers = (users) => { return { type: 'SET-USERS', users: users } };
export const increasePageSize = () => { return { type: 'INCREASE-PAGE-SIZE' } };
export const setCurrentPage = (currentPage) => { return { type: 'SET-CURRENT-PAGE', currentPage } };
export const setUsersTotalCount = (usersTotalCount) => { return { type: 'SET-USERS-TOTAL-COUNT', usersTotalCount } };
export const togglePreloader = (isFetching) => { return { type: 'TOGGLE-PRELOADER', isFetching } };
export const toggleFollowingButton = (userId) => { return { type: 'TOGGLE_FOLLOWING_BUTTON', userId } };

//Thunk creators

export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(togglePreloader(true));
        let data = await usersAPI.getUsersFromServer(currentPage, pageSize)
        dispatch(setUsers(data.items));
        dispatch(setUsersTotalCount(data.totalCount));
        dispatch(togglePreloader(false));
    }
}
export const showMoreUsers = (pageSize) => {
    return async (dispatch) => {
        dispatch(togglePreloader(true));
        dispatch(increasePageSize());
        let data = await usersAPI.getUsersFromServer(1, pageSize + 5)
        dispatch(setUsers(data.items));
        dispatch(togglePreloader(false));
    }
}
export const follow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingButton(userId));
        let data = await followAPI.follow(userId);
        if (data.resultCode === 0) {
            dispatch(followSuccess(userId));
            dispatch(toggleFollowingButton(userId));
        }
    }
}
export const unfollow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingButton(userId));
        let data = await followAPI.unfollow(userId);
        if (data.resultCode === 0) {
            dispatch(unfollowSuccess(userId));
            dispatch(toggleFollowingButton(userId));
        }
    }
}
export const onPageChanged = (pageNumber) => async (dispatch) => {
    dispatch (togglePreloader(true));
    let data = await usersAPI.getUsersFromServer(pageNumber);
    dispatch(setUsers(data.items));
    dispatch(setCurrentPage(pageNumber));
    dispatch (togglePreloader(false));

}

export default usersReducer;