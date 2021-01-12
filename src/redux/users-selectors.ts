import { createSelector } from "reselect"
import {AppStateType} from './redux-store'
import {UserType} from '../types/types'

export const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users
}
export const getUsersWithPhoto = createSelector(getUsersSelector, (users: Array<UserType>): Array<UserType> => {
    return users.filter((user: UserType) => !!user.photos.small);
});
export const getUsersTotalCount = (state: AppStateType) => {
    return state.usersPage.usersTotalCount
}