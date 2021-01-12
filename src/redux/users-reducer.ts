import { followAPI, ResultCodes, usersAPI, ResponseType } from '../api/api';
import { ActionsType, UserType } from '../types/types';
import { changeValuesInArray } from '../Utils/Array-changers';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './redux-store';
import { Dispatch } from 'react';

const initialState = {
    users: [] as Array<UserType>,
    friends: [] as Array<UserType>,
    usersTotalCount: 0,
    currentPage: 1,
    pageSize: 100,
    term: null as string | null,
    paginationButtonsCount: 3,
    isFetching: false,
    followingUsers: [] as Array<number>
}
export type InitialStateType = typeof initialState;

//Action creators
export const usersActions = {
    followSuccess : (userId: number) => ({ type: 'FOLLOW_SUCCESS', userId } as const),
    unfollowSuccess : (userId: number) => ({ type: 'UNFOLLOW_SUCCESS', userId } as const),
    setUsers : (users: Array<UserType>) => ({ type: 'SET_USERS', users } as const),
    setFriends : (friends: Array<UserType>) => ({ type: 'SET_FRIENDS', friends } as const),
    setTerm : (term: string | null) => ({ type: 'SET_TERM', term } as const),
    increasePageSize : () => ({ type: 'INCREASE_PAGE_SIZE' } as const),
    setCurrentPage : (currentPage: number) => ({ type: 'SET_CURRENT_PAGE', currentPage } as const),
    setUsersTotalCount : (usersTotalCount: number) => ({ type: 'SET_USERS_TOTAL_COUNT', usersTotalCount } as const),
    togglePreloader : (isFetching: boolean) => ({ type: 'TOGGLE_IS_FETCHING', isFetching } as const),
    toggleFollowingButton : (userId: number) => ({ type: 'TOGGLE_FOLLOWING_BUTTON', userId } as const)
}

type UsersActionsType = ActionsType<typeof usersActions>
const usersReducer = (state = initialState, action: UsersActionsType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW_SUCCESS':
            return {
                ...state,
                users: changeValuesInArray(state.users, 'id', action.userId, 'followed', true),
                friends: changeValuesInArray(state.friends, 'id', action.userId, 'followed', true)
            }
        case 'UNFOLLOW_SUCCESS':
            return {
                ...state,
                users: changeValuesInArray(state.users, 'id', action.userId, 'followed', false),
                friends: changeValuesInArray(state.friends, 'id', action.userId, 'followed', false)
            }
        case 'INCREASE_PAGE_SIZE':
            return { ...state, pageSize: state.pageSize + 5 };
        case 'SET_CURRENT_PAGE':
            return { ...state, currentPage: action.currentPage };
        case 'SET_USERS_TOTAL_COUNT':
            return { ...state, usersTotalCount: action.usersTotalCount };
        case 'SET_USERS':
            return { ...state, users: [...action.users] };
        case 'SET_FRIENDS':
            return { ...state, friends: [...action.friends] };
        case 'SET_TERM':
            return { ...state, term: action.term };
        case 'TOGGLE_IS_FETCHING':
            return { ...state, isFetching: action.isFetching ? true : false };
        case 'TOGGLE_FOLLOWING_BUTTON':
            return {
                ...state, followingUsers: state.followingUsers.some((user) => user === action.userId)
                    ? state.followingUsers.filter(user => user !== action.userId)
                    : state.followingUsers.concat(action.userId)
            };
        default: return { ...state };
    }
}


//Thunk creators
type ThunkCreatorType = ThunkAction<Promise<void>, AppStateType, unknown, UsersActionsType>
export const getUsers = (currentPage: number, pageSize: number, term?: string, friend?: boolean): ThunkCreatorType => {
    return async (dispatch) => {
        dispatch(usersActions.togglePreloader(true));
        let data;
        if (!term) {
            data = await usersAPI.getUsersFromServer(1, 10, term, friend);
            let pages = Math.ceil(data.totalCount / pageSize);
            let currentPageFromEnd = pages - currentPage;
            data = await usersAPI.getUsersFromServer(currentPageFromEnd, pageSize, null, friend)
        } else {
            data = await usersAPI.getUsersFromServer(currentPage, pageSize, term, friend)
        }
        dispatch(usersActions.setUsers(data.items));
        dispatch(usersActions.setUsersTotalCount(data.totalCount));
        dispatch(usersActions.togglePreloader(false));
    }
}
export const getFriends = (): ThunkCreatorType => {
    return async (dispatch) => {
        let friends = await usersAPI.getUsersFromServer(1, 100, null, true);
        dispatch(usersActions.setFriends(friends.items));

    }
}
export const showMoreUsers = (pageSize: number): ThunkCreatorType => {
    return async (dispatch) => {
        dispatch(usersActions.togglePreloader(true));
        dispatch(usersActions.increasePageSize());
        let data = await usersAPI.getUsersFromServer(1, pageSize + 5)
        dispatch(usersActions.setUsers(data.items));
        dispatch(usersActions.togglePreloader(false));
    }
}
const followFlow = async (dispatch: Dispatch<UsersActionsType>, userId: number,
    apiMethod: (userId: number) => Promise<ResponseType>, actionMethod: (userId: number) => UsersActionsType) => {
    dispatch(usersActions.toggleFollowingButton(userId));
        let data = await apiMethod(userId);
        if (data.resultCode === ResultCodes.Success) {
            dispatch(actionMethod(userId));
            dispatch(usersActions.toggleFollowingButton(userId));
        }
}
export const follow = (userId: number): ThunkCreatorType => {
    return async (dispatch) => {
        await followFlow(dispatch, userId, followAPI.follow, usersActions.followSuccess)
    }
}
export const unfollow = (userId: number): ThunkCreatorType => {
    return async (dispatch) => {
        await followFlow(dispatch, userId, followAPI.unfollow, usersActions.unfollowSuccess)
    }
}
export const onPageChanged = (pageNumber: number, pageCount: number, term?: string, friend?: boolean): ThunkCreatorType => {
    return async (dispatch) => {
        dispatch(getUsers(pageNumber, pageCount, term, friend))
        dispatch(usersActions.setCurrentPage(pageNumber));
    }
}

export default usersReducer;