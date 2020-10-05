import profileReducer from "./profile-reducer";
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
    _state: {
        messagesPage: {
            dialogs:
                [{ name: "Max", id: 1 },
                { name: "Tanchita", id: 2 },
                { name: "Yura", id: 3 },
                { name: "Sanek", id: 4 },
                { name: "Dan", id: 5 },
                { name: "Krista", id: 6 }],
            messages:
                [{ text: "Hey, man!", id: 1 },
                { text: "How are you?", id: 2 },
                { text: "Hey! I'm fine. Let's meet today!", id: 3 },
                { text: "How about 8 o'clock?", id: 4 },
                { text: "Ok, great!", id: 5 }],
            textarea: ''
        },
        profilePage: {
            posts:
                [{ message: "Hi, how are you?", id: 1, likesCount: 16 },
                { message: "It's my first post", id: 2, likesCount: 15 }],
            newPostText: ''
        },
        sidebar: {
            friendsList: [{ name: 'Tanchisa', id: 1 },
            { name: 'Max', id: 2 },
            { name: 'Dan', id: 3 },
            { name: 'Krista', id: 4 },
            { name: 'Sanek', id: 5 },
            { name: 'Yura', id: 6 }]
        }
    },
    _callSubscriber() {
        console.log('Render method is not defined');
    },
    getState () {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this);
    }
}

export default store; 