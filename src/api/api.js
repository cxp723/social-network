import * as axios from 'axios';

const apiInstance = axios.create ({
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY' : '1500a81d-951a-4b37-975e-19522be74bca'
    }
})

export const profileAPI = {
    getProfile (userId) {
        return apiInstance.get('profile/' + userId).then(response => response.data);
    },
    setProfile (profile) {
        return apiInstance.put('profile', profile).then(response => response.data);
    },
    getStatus (profileId) {
        return apiInstance.get('profile/status/' + profileId).then(response => response.data);
    },
    updateStatus (status) {
        return apiInstance.put('profile/status', {status}).then(response => response.data);
    },
    uploadPhoto (photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return apiInstance.put('profile/photo', formData, {headers: {
            'Content-Type': 'multipart/form-data'
          }}).then(response => response.data)
    }
}

export const usersAPI = {
    getUsersFromServer (page = 1, count = 5) {
        let usersData = apiInstance.get('users?page=' + page + '&count=' + count).then(response => response.data);
        return usersData;
    }
}

export const followAPI = {
    follow (userId) {
        let follow = apiInstance.post('follow/' + userId).then(response => response.data);
        return follow;
    },
    unfollow (userId) {
        let unfollow = apiInstance.delete('follow/' + userId).then(response => response.data);
        return unfollow;
    }
}

export const authAPI = {
    auth () {
        return apiInstance.get('auth/me').then(response => response.data)
    },
    login (email, password, rememberMe, captcha) {
        return apiInstance.post('auth/login', {email, password, rememberMe, captcha}).then(response => response.data)
    },
    logout () {
        return apiInstance.delete('auth/login').then(response => response.data)
    },
    getCaptcha () {
        return apiInstance.get('security/get-captcha-url').then(response => response.data);
    }
}
