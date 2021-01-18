import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { appReducer } from "./app-reducer";
import { albumReducer } from "./album-reducer";
import { newsReducer } from "./news-reducer";

let globalReducer = combineReducers({
  messagesPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
  album: albumReducer,
  newsPage: newsReducer,
});
type GlobalReducerType = typeof globalReducer;
export type AppStateType = ReturnType<GlobalReducerType>;
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  globalReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
export default store;
