import { createSelector } from "reselect"

export const getUsersSelector = (state) => {
    return state.usersPage.users
}
export const getFilteredUsersSelector = (state) => {
    return state.usersPage.users.filter(user => true)
}
export const getUsersSelectorReselect = createSelector(getUsersSelector, (users) => {
    return users.filter(user => true);
});
export const getUsersTotalCount = (state) => {
    return state.usersPage.usersTotalCount
}