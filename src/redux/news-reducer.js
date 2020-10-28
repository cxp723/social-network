import { getNewsFromServer } from './../api/api';

const initialState = {
    news: [],
    newsCount: null,
    isFetching: false
}

const setNews = (news, newsCount) => ({type: 'SET_NEWS', news, newsCount});
const toggleFetching = (isFetching) => ({type: 'TOGGLE_FETCHING', isFetching});

const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const SET_NEWS = 'SET_NEWS';

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS :
            return {...state, news: action.news, newsCount: action.newsCount};
        case TOGGLE_FETCHING :
            return {...state, isFetching: action.isFetching}
        default: return state
    }
}

export const getNews = () => {
    return async (dispatch) => {
        dispatch(toggleFetching(true));
        let news = await getNewsFromServer();
        if (news.status === 'ok') {
            dispatch(setNews(news.articles, news.totalResults));
        }
        dispatch(toggleFetching(false));
    }
}
