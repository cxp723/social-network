import { profileAPI, ResultCodes } from "../api/api";
import { stopSubmit } from "redux-form";
import { ActionsType, PhotoType, PostType, ProfileType } from "../types/types";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./redux-store";
import { profileFormDataType } from "../components/Profile/ProfileDescription/ProfileDescription";

export const profileActions = {
  deletePost: (id: number) => ({ type: "DELETE_POST", id } as const),
  addPost: (text: string) => ({ type: "ADD_POST", text } as const),
  likePost: (id: number) => ({ type: "LIKE_POST", id } as const),
  setProfile: (profile: ProfileType) =>
    ({ type: "SET_PROFILE", profile } as const),
  setStatus: (status: string) => ({ type: "SET_STATUS", status } as const),
  setPhoto: (photos: PhotoType) => ({ type: "SET_PHOTO", photos } as const),
  togglePreloader: (isFetching: boolean) =>
    ({ type: "TOGGLE_IS_FETCHING", payload: { isFetching } } as const),
  toggleUploading: () => ({ type: "TOGGLE_UPLOADING" } as const),
  toggleUpdating: (isFetching: boolean) =>
    ({ type: "TOGGLE_UPDATING", isFetching } as const),
  updatingProfileInProcess: (updating: boolean) =>
    ({ type: "UPDATING_PROFILE", updating } as const),
};
type ProfileActionsType = ActionsType<typeof profileActions>;
const initialState = {
  profile: null as ProfileType | null,
  status: "",
  //Hardcoded posts
  posts: [
    {
      message:
        "Hooks don’t replace your knowledge of React concepts. Instead, Hooks provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle. As we will show later, Hooks also offer a new powerful way to combine them.",
      id: 1,
      likesCount: 16,
      date: new Date(2020, 1, 1),
    },
    {
      message:
        "Hooks solve a wide variety of seemingly unconnected problems in React that we’ve encountered over five years of writing and maintaining tens of thousands of components. Whether you’re learning React, use it daily, or even prefer a different library with a similar component model, you might recognize some of these problems.",
      id: 2,
      likesCount: 15,
      date: new Date(2020, 3, 24),
    },
    {
      message:
        "React doesn’t offer a way to “attach” reusable behavior to a component (for example, connecting it to a store). If you’ve worked with React for a while, you may be familiar with patterns like render props and higher-order components that try to solve this. But these patterns require you to restructure your components when you use them, which can be cumbersome and make code harder to follow. If you look at a typical React application in React DevTools, you will likely find a “wrapper hell” of components surrounded by layers of providers, consumers, higher-order components, render props, and other abstractions. While we could filter them out in DevTools, this points to a deeper underlying problem: React needs a better primitive for sharing stateful logic.",
      id: 3,
      likesCount: 10,
      date: new Date(2020, 6, 12),
    },
    {
      message:
        "We’ve often had to maintain components that started out simple but grew into an unmanageable mess of stateful logic and side effects. Each lifecycle method often contains a mix of unrelated logic. For example, components might perform some data fetching in componentDidMount and componentDidUpdate. However, the same componentDidMount method might also contain some unrelated logic that sets up event listeners, with cleanup performed in componentWillUnmount. Mutually related code that changes together gets split apart, but completely unrelated code ends up combined in a single method. This makes it too easy to introduce bugs and inconsistencies.",
      id: 4,
      likesCount: 8,
      date: new Date(2020, 7, 7),
    },
    {
      message:
        "In addition to making code reuse and code organization more difficult, we’ve found that classes can be a large barrier to learning React. You have to understand how this works in JavaScript, which is very different from how it works in most languages. You have to remember to bind the event handlers. Without unstable syntax proposals, the code is very verbose. People can understand props, state, and top-down data flow perfectly well but still struggle with classes. The distinction between function and class components in React and when to use each one leads to disagreements even between experienced React developers.",
      id: 5,
      likesCount: 15,
      date: new Date(2020, 7, 11),
    },
    {
      message:
        "Additionally, React has been out for about five years, and we want to make sure it stays relevant in the next five years. As Svelte, Angular, Glimmer, and others show, ahead-of-time compilation of components has a lot of future potential. Especially if it’s not limited to templates. Recently, we’ve been experimenting with component folding using Prepack, and we’ve seen promising early results. However, we found that class components can encourage unintentional patterns that make these optimizations fall back to a slower path. Classes present issues for today’s tools, too. For example, classes don’t minify very well, and they make hot reloading flaky and unreliable. We want to present an API that makes it more likely for code to stay on the optimizable path.",
      id: 6,
      likesCount: 20,
      date: new Date(2020, 8, 12),
    },
    {
      message:
        "Conceptually, React components have always been closer to functions. Hooks embrace functions, but without sacrificing the practical spirit of React. Hooks provide access to imperative escape hatches and don’t require you to learn complex functional or reactive programming techniques.",
      id: 7,
      likesCount: 13,
      date: new Date(2020, 9, 12),
    },
  ] as Array<PostType>,
  isFetching: false,
  uploadingPhoto: false,
  updatingProfile: false,
  updateFetching: false,
};
export type InitialStateType = typeof initialState;
const profileReducer = (
  state = initialState,
  action: ProfileActionsType
): InitialStateType => {
  switch (action.type) {
    case "ADD_POST":
      let newPost = {
        message: action.text,
        id: state.posts[state.posts.length - 1].id + 1,
        likesCount: 0,
        date: new Date(),
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.id),
      };
    case "SET_PROFILE":
      return {
        ...state,
        profile: action.profile,
      };
    case "LIKE_POST":
      return {
        ...state,
        posts: state.posts.map((post) => {
          post.id === action.id && post.likesCount++;
          return post;
        }),
      };
    case "SET_PHOTO":
      return state.profile !== null
        ? { ...state, profile: { ...state.profile, photos: action.photos } }
        : state;
    case "SET_STATUS":
      return {
        ...state,
        status: action.status,
      };
    case "TOGGLE_IS_FETCHING":
      return {
        ...state,
        ...action.payload,
      };
    case "TOGGLE_UPLOADING":
      return {
        ...state,
        uploadingPhoto: !state.uploadingPhoto,
      };
    case "TOGGLE_UPDATING":
      return {
        ...state,
        updateFetching: action.isFetching,
      };
    case "UPDATING_PROFILE":
      return {
        ...state,
        updatingProfile: action.updating,
      };
    default:
      return state;
  }
};

export const getProfileWithStatus = (
  profileId: number
): ThunkAction<Promise<void>, AppStateType, unknown, ProfileActionsType> => {
  return async (dispatch) => {
    dispatch(profileActions.togglePreloader(true));
    await dispatch(getProfile(profileId));
    await dispatch(getStatus(profileId));
    dispatch(profileActions.togglePreloader(false));
  };
};
export const getProfile = (profileId: number) => {
  return async (dispatch: Dispatch<ProfileActionsType>) => {
    let data = await profileAPI.getProfile(profileId);
    dispatch(profileActions.setProfile(data));
  };
};
export const getStatus = (profileId: number) => {
  return async (dispatch: Dispatch<ProfileActionsType>) => {
    let data = await profileAPI.getStatus(profileId);
    dispatch(profileActions.setStatus(data));
  };
};
export const updateStatus = (
  status: string
): ThunkAction<Promise<void>, AppStateType, unknown, ProfileActionsType> => {
  return async (dispatch) => {
    let data = await profileAPI.updateStatus(status);
    if (data.resultCode === ResultCodes.Success) {
      dispatch(profileActions.setStatus(status));
    }
  };
};
export const savePhoto = (photoFile: File) => {
  return async (dispatch: Dispatch<ProfileActionsType>) => {
    dispatch(profileActions.toggleUploading());
    let response = await profileAPI.uploadPhoto(photoFile);
    if (response.resultCode === ResultCodes.Success)
      dispatch(profileActions.setPhoto(response.data.photos));
    dispatch(profileActions.toggleUploading());
  };
};
export const updateProfile = (
  data: profileFormDataType
): ThunkAction<Promise<void>, AppStateType, unknown, ProfileActionsType> => {
  type ErrorsObjectType = { [key: string]: string };
  const parseErrorObject = (errors: Array<string>) => {
    let errorsObject: ErrorsObjectType = {};
    errors.forEach((error) => {
      let element = "";
      let message = "";
      let errorInArray = error.split(" ");
      let lastElement = errorInArray[errorInArray.length - 1];
      if (lastElement.search(/->/) > 0) {
        element = lastElement.slice(lastElement.search(/->/) + 2, -1);
        element = "contacts." + element[0].toLowerCase() + element.substring(1);
      } else {
        element = lastElement.slice(1, -1);
        element = element[0].toLowerCase() + element.substring(1);
      }
      message = error.split("(")[0];
      errorsObject[element] = message;
    });
    return errorsObject;
  };
  return async (dispatch, getState) => {
    const me = getState().profilePage.profile?.userId;
    dispatch(profileActions.toggleUpdating(true));
    let response = await profileAPI.setProfile(data);
    if (response.resultCode === ResultCodes.Success) {
      if (me) await dispatch(getProfile(me));
      dispatch(profileActions.updatingProfileInProcess(false));
    } else {
      dispatch(stopSubmit("edit-profile", parseErrorObject(response.messages)));
    }
    dispatch(profileActions.toggleUpdating(false));
  };
};
export default profileReducer;
