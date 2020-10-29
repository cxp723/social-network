import { createSelector } from "reselect"

export const getUsersSelector = (state) => {
    return state.usersPage.users
}
export const getUsersWithPhoto = createSelector(getUsersSelector, (users) => {
    return users.filter(user => !!user.photos.small);
});
export const getUsersTotalCount = (state) => {
    return state.usersPage.usersTotalCount
}