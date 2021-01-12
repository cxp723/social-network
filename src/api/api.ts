import axios from 'axios';
import { profileFormDataType } from '../components/Profile/ProfileDescription/ProfileDescription';
import { PhotoType, ProfileType, UserType } from '../types/types';

const apiInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '1500a81d-951a-4b37-975e-19522be74bca'
    }
})
const newsApi = axios.create({
    baseURL: 'https://newsapi.org/v2/',
    headers: {
        'X-Api-Key': '2abe93eb1c364e14a4657dd9de111293'
    }
})

export const getNewsFromServer = () => {
    return newsApi.get('top-headlines?sources=techcrunch').then(response => response.data)
}
const photoAPI = axios.create({
    baseURL: 'https://api.pexels.com/v1/',
    headers: {
        'Authorization': '563492ad6f917000010000016a815fc331434f5abb389e2b1349a69d'
    }
})
export const getPhotosForAlbum = (numberOfPhotos: number, page: number) => {
    return photoAPI.get('curated?per_page=' + numberOfPhotos + '&page=' + page).then(response => response.data.photos);
}
export enum ResultCodes {
    Success = 0,
    Error = 1
}
export enum ResultCodeWithCaptcha {
    CaptchaRequired = 10
}
export type ResponseType<RC = ResultCodes, D = {}> = {
    resultCode: RC,
    messages: Array<string>,
    data: D
}
export const profileAPI = {
    getProfile(userId: number) {
        return apiInstance.get<ProfileType>('profile/' + userId).then(response => response.data);
    },
    setProfile(profile: profileFormDataType) {
        return apiInstance.put<ResponseType>('profile', profile).then(response => response.data);
    },
    getStatus(profileId: number) {
        return apiInstance.get<string>('profile/status/' + profileId).then(response => response.data);
    },
    updateStatus(status: string) {
        return apiInstance.put<ResponseType>('profile/status', { status }).then(response => response.data);
    },
    uploadPhoto(photoFile: File) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return apiInstance.put<ResponseType<ResultCodes, {photos: PhotoType}>>('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data)
    }
}
type GetUsersResponse = {
    items: Array<UserType>
    totalCount: number
    error: string
}
export const usersAPI = {
    getUsersFromServer(page = 1, count = 10, term = null as null | string, friend = null as null | boolean) {
        let usersData = apiInstance.get<GetUsersResponse>(`users?page=${page}&count=${count}${term !== null ? '&term=' + term : ''}${friend !== null ? '&friend=' + friend : ''}`).then(response => response.data);
        return usersData;
    }
}

export const followAPI = {
    follow(userId: number) {
        let follow = apiInstance.post<ResponseType>('follow/' + userId).then(response => response.data);
        return follow;
    },
    unfollow(userId: number) {
        let unfollow = apiInstance.delete<ResponseType>('follow/' + userId).then(response => response.data);
        return unfollow;
    }
}
export type AuthResponse = ResponseType<
    ResultCodes, 
    {
    id: number
    email: string
    login: string}>
type LoginResponse = ResponseType<ResultCodes | ResultCodeWithCaptcha, {userId: number}>
type GetCaptchaResponse = {
    url: string
}
export const authAPI = {
    auth() {
        return apiInstance.get<AuthResponse>('auth/me').then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean, captcha: string) {
        return apiInstance.post<LoginResponse>('auth/login', { email, password, rememberMe, captcha }).then(response => response.data)
    },
    logout() {
        return apiInstance.delete<ResponseType>('auth/login').then(response => response.data)
    },
    getCaptcha() {
        return apiInstance.get<GetCaptchaResponse>('security/get-captcha-url').then(response => response.data);
    }
}
