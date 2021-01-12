import { getNewsFromServer } from '../api/api';
import { ActionsType, BaseThunkType } from '../types/types';

const initialState = {
    news: [] as Array<NewsType>,
    newsCount: null as number | null,
    isFetching: false
}
type NewsType = {
    articles: Array<string>,
    totalResults: number
}
type InitialStateType = typeof initialState;
type NewsActionsType = ActionsType<typeof newsActions>
type ThunkType = BaseThunkType<NewsActionsType>
const newsActions = {
    setNews : (news: Array<NewsType>, newsCount: number) => ({type: 'SET_NEWS', news, newsCount} as const),
    toggleFetching : (isFetching: boolean) => ({type: 'TOGGLE_FETCHING', isFetching} as const)
}

export const newsReducer = (state = initialState, action: NewsActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET_NEWS' :
            return {...state, news: action.news, newsCount: action.newsCount};
        case 'TOGGLE_FETCHING' :
            return {...state, isFetching: action.isFetching}
        default: return state
    }
}

export const getNews = (): ThunkType => {
    return async (dispatch) => {
        dispatch(newsActions.toggleFetching(true));
        let news = await getNewsFromServer();
        if (news.status === 'ok') {
            dispatch(newsActions.setNews(news.articles, news.totalResults));
        }
        dispatch(newsActions.toggleFetching(false));
    }
}
