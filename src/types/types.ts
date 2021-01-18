import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../redux/redux-store";

export type ContactsOption =
  | "facebook"
  | "vk"
  | "twitter"
  | "linkedin"
  | "instagram"
  | "youtube"
  | "website"
  | "mainLink"
  | "github";
export type ContactsType = {
  [key in ContactsOption]: string | null;
};
export type PhotoType = {
  small: string | null;
  large: string | null;
};
export type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  aboutMe: string;
  fullName: string;
  contacts: ContactsType;
  photos: PhotoType;
};
export type PostType = {
  message: string;
  id: number;
  likesCount: number;
  date: Date;
};
export type UserType = {
  name: string;
  id: number;
  photos: PhotoType;
  status: string | null;
  followed: boolean;
};
export type MessageType = {
  text: string;
  id: number;
  direction: string;
  date: Date;
};
export type DialogType = {
  userId: number;
  messages: Array<MessageType>;
};
type AlbumPhotoSourceType = {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
};
export type AlbumPhotoType = {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  src: AlbumPhotoSourceType;
  liked: boolean;
};

//Types for Actions
export type ActionsType<T> = T extends {
  [key: string]: (...args: any[]) => infer U;
}
  ? U
  : never;

//Types for Thunks
export type BaseThunkType<A extends Action, T = Promise<void>> = ThunkAction<
  T,
  AppStateType,
  unknown,
  A
>;
