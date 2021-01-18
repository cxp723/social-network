import {
  getProfile,
  profileActions,
  savePhoto,
  updateProfile,
} from "./profile-reducer";
import { profileAPI, ResponseType, ResultCodes } from "./../api/api";
import { PhotoType, ProfileType } from "../types/types";
import { profileFormDataType } from "../components/Profile/ProfileDescription/ProfileDescription";

jest.mock("./../api/api");
const profileAPIMock = profileAPI as jest.Mocked<typeof profileAPI>;
const successProfileResponse: ProfileType = {
  aboutMe: "я программист",
  photos: {
    small: null,
    large: null,
  },
  contacts: {
    linkedin: "link",
    youtube: "you",
    website: "web",
    mainLink: "main",
    github: "git",
    vk: "vk.com",
    facebook: "facebook",
    twitter: "twitter",
    instagram: "instagra",
  },
  lookingForAJob: true,
  lookingForAJobDescription: "Ищу работу, знаю это это и это",
  fullName: "samurai dmitry",
  userId: 1,
};
const dispatchMock = jest.fn();
const getStateMock = jest.fn();
beforeEach(() => {
  dispatchMock.mockClear();
  getStateMock.mockClear();
});

test("getProfile thunk works correctly", async () => {
  profileAPIMock.getProfile.mockReturnValue(
    Promise.resolve(successProfileResponse)
  );
  const getProfileThunk = getProfile(1);
  await getProfileThunk(dispatchMock);
  expect(dispatchMock).toBeCalledWith(
    profileActions.setProfile(successProfileResponse)
  );
});

const successUploadPhotoResponse: ResponseType<
  ResultCodes,
  { photos: PhotoType }
> = {
  resultCode: ResultCodes.Success,
  messages: [],
  data: {
    photos: {
      small: "url",
      large: "another url",
    },
  },
};
test("save photo thunk works correctly", async () => {
  profileAPIMock.uploadPhoto.mockReturnValue(
    Promise.resolve(successUploadPhotoResponse)
  );
  const savePhotoThunk = savePhoto(require("../images/ava.jpg"));
  await savePhotoThunk(dispatchMock);
  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(
    1,
    profileActions.toggleUploading()
  );
  expect(dispatchMock).toHaveBeenNthCalledWith(
    2,
    profileActions.setPhoto(successUploadPhotoResponse.data.photos)
  );
  expect(dispatchMock).toHaveBeenNthCalledWith(
    3,
    profileActions.toggleUploading()
  );
});
const successProfileUpdateResolve: ResponseType = {
  resultCode: ResultCodes.Success,
  messages: [],
  data: {},
};
const profileDataForUpdate: profileFormDataType = {
  fullName: "bob",
  aboutMe: "I'm okay",
  contacts: {
    linkedin: "link",
    youtube: "you",
    website: null,
    mainLink: "main",
    github: "git",
    vk: null,
    facebook: "facebook",
    twitter: "twitter",
    instagram: null,
  },
  lookingForAJob: true,
  lookingForAJobDescription: "looking",
};
const stateMock = {
  profilePage: {
    profile: {
      fullName: "bob",
      aboutMe: "I'm okay",
      contacts: {
        linkedin: "link",
        youtube: "you",
        website: null,
        mainLink: "main",
        github: "git",
        vk: null,
        facebook: "facebook",
        twitter: "twitter",
        instagram: null,
      },
      lookingForAJob: true,
      lookingForAJobDescription: "looking",
      userId: 1,
      photos: {
        small: null,
        large: null,
      },
    },
  },
};
getStateMock.mockReturnValue(stateMock);
test("update profile thunk works correctly", async () => {
  profileAPIMock.setProfile.mockReturnValue(
    Promise.resolve(successProfileUpdateResolve)
  );
  const profileUpdateThunk = updateProfile(profileDataForUpdate);
  await profileUpdateThunk(dispatchMock, getStateMock, {});
  expect(dispatchMock).toBeCalledTimes(4);
  expect(dispatchMock).toHaveBeenNthCalledWith(
    1,
    profileActions.toggleUpdating(true)
  );
  //expect(dispatchMock).toHaveBeenNthCalledWith(2, getProfile(1))
  expect(dispatchMock).toHaveBeenNthCalledWith(
    3,
    profileActions.updatingProfileInProcess(false)
  );
  expect(dispatchMock).toHaveBeenNthCalledWith(
    4,
    profileActions.toggleUpdating(false)
  );
});
