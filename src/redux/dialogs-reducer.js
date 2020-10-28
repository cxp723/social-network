const send_message = 'SEND-MESSAGE';
const CREATE_NEW_CHAT = 'CREATE_NEW_CHAT';

export const sendMessage = (newMessageText, userId) => ({type: send_message, newMessageText, userId});
export const createNewChat = (userId) => ({type: CREATE_NEW_CHAT, userId})

const initialState = {
    dialogs:
        {
            8349 : [{ text: "Hey, man!", id: 1, direction: 'from' },
            { text: "How are you?", id: 2, direction: 'from' },
            { text: "Hey! I'm fine. Let's meet today!", id: 3, direction: 'to' },
            { text: "How about 8 o'clock?", id: 4, direction: 'from' },
            { text: "Ok, great!", id: 5, direction: 'to' },
            { text: "See you tomorrow!", id: 6, direction: 'to' },
            { text: "Don't forget you umbrella, it's gonna be rainy tomorrow:(", id: 7, direction: 'from' },
            { text: "Sure)", id: 8, direction: 'to' },
            { text: "You too!", id: 9, direction: 'to' }],

            9510 : [{ text: "Hi!", id: 1, direction: 'from' },
            { text: "I have a problem with the hometask:(", id: 2, direction: 'from' },
            { text: "Hey! How can I help you?", id: 3, direction: 'to' },
            { text: "I don't have materials from last lection(", id: 4, direction: 'from' },
            { text: "I'll send you them!", id: 5, direction: 'to' },
            { text: "Don't worry!", id: 6, direction: 'to' },
            { text: "You're saving me!", id: 7, direction: 'from' },
            { text: "Thank you)", id: 8, direction: 'from' },
            { text: "No problem)", id: 9, direction: 'to' }],

            7180 : [{ text: "psss", id: 1, direction: 'from' },
            { text: "How are you?", id: 2, direction: 'from' },
            { text: "I'm great! Wanna meet today?", id: 3, direction: 'to' },
            { text: "How about 5 o'clock?", id: 4, direction: 'from' },
            { text: "Ok, great!", id: 5, direction: 'to' },
            { text: "See you soon!", id: 6, direction: 'to' },
            { text: "Take some snacks, please)", id: 7, direction: 'from' },
            { text: "Ok, I'm hungry too)", id: 8, direction: 'to' },
            { text: "Prepare yourself!)", id: 9, direction: 'to' }],

            7084 : [{ text: "Hi, darling", id: 1, direction: 'to' },
            { text: "Hi, cutee!)", id: 2, direction: 'from' },
            { text: "I miss you! How about tomorrow? Have some plans?", id: 3, direction: 'to' },
            { text: "I have a huge load of crap on my job(( ", id: 4, direction: 'from' },
            { text: "Maybe on monday?", id: 5, direction: 'from' },
            { text: "Sure, why not))", id: 6, direction: 'to' },
            { text: "So, will see you on monday:(", id: 7, direction: 'from' },
            { text: "Can't wait)", id: 8, direction: 'from' },
            { text: "Me too!", id: 9, direction: 'to' }],

            11753 : [{ text: "Hey, man!", id: 1, direction: 'from' },
            { text: "Have some news?", id: 2, direction: 'from' },
            { text: "Nope, sorry(", id: 3, direction: 'to' },
            { text: "Okay, I'll wait)", id: 4, direction: 'from' },
            { text: "Good news! Your photos are ready. You can get them tomorrow in the office from 9 till 17 o'clock!", id: 5, direction: 'to' },
            { text: "Great!", id: 6, direction: 'from' },
            { text: "I'll come on the afternoon", id: 7, direction: 'from' },
            { text: "Okay", id: 8, direction: 'to' },
            { text: "Don't forget passport!", id: 9, direction: 'to' },
            { text: "Sure!", id: 10, direction: 'from' }]
        }
    };
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case send_message :
            let newMessage = {
                text: action.newMessageText,
                id: state.dialogs[action.userId].length > 0 ? state.dialogs[action.userId][state.dialogs[action.userId].length - 1].id + 1 : 1,
                direction: 'to'
            };
            console.log(newMessage);
            return {...state,
                        dialogs: {...state.dialogs, [action.userId] : state.dialogs[action.userId].concat(newMessage)}};
        case CREATE_NEW_CHAT:
            return {...state, 
                dialogs: {...state.dialogs, [action.userId] : []}};
        default: return state;
    }
}

export default dialogsReducer;