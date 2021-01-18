import profileReducer, { profileActions } from "./profile-reducer";
import { InitialStateType } from "./profile-reducer";

let oldState: InitialStateType;

beforeEach(
  () =>
    (oldState = {
      profile: null,
      status: "",
      posts: [
        {
          message: "Hi, how are you?",
          id: 1,
          likesCount: 16,
          date: new Date(2020, 1, 1),
        },
        {
          message: "It's my first post",
          id: 2,
          likesCount: 15,
          date: new Date(2020, 1, 1),
        },
      ],
      isFetching: false,
      uploadingPhoto: false,
      updatingProfile: false,
      updateFetching: false,
    })
);

test("new post action works correctly", () => {
  const action = profileActions.addPost("newPost");
  let newState = profileReducer(oldState, action);
  expect(newState.posts.length).toBe(3);
  expect(newState.posts[2].message).toBe("newPost");
});
test("delete post works correctly", () => {
  const action = profileActions.deletePost(2);
  let newState = profileReducer(oldState, action);
  expect(newState.posts.length).toBe(1);
});
test("post shouldn't be deleted", () => {
  const action = profileActions.deletePost(1000);
  let newState = profileReducer(oldState, action);
  expect(newState.posts.length).toBe(2);
});
test("like post action works correctly", () => {
  const action = profileActions.likePost(2);
  let newState = profileReducer(oldState, action);
  expect(newState.posts[1].likesCount).toBe(16);
});
test("set status action works correctly", () => {
  const action = profileActions.setStatus("new status");
  let newState = profileReducer(oldState, action);
  expect(newState.status).toBe("new status");
});
