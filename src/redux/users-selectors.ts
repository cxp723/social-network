import { createSelector } from "reselect";
import { AppStateType } from "./redux-store";
import { UserType } from "../types/types";
import { getRandomArr } from "../Utils/Array-changers";

export const getUsersSelector = (state: AppStateType) => {
  return state.usersPage.users;
};
export const getFriendsSelector = (state: AppStateType) =>
  state.usersPage.friends;
export const getUsersWithPhoto = createSelector(
  getUsersSelector,
  (users: Array<UserType>): Array<UserType> => {
    return users.filter((user: UserType) => !!user.photos.small);
  }
);
export const getUsersTotalCount = (state: AppStateType) => {
  return state.usersPage.usersTotalCount;
};
export const getRandomFriends = createSelector(
  getFriendsSelector,
  (friends: Array<UserType>): Array<UserType> => {
    return getRandomArr(friends, 8);
  }
);
