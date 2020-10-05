const send_message = 'SEND-MESSAGE';

export const sendMessage = (newMessageText) => ({type: send_message, newMessageText});

const initialState = {
    dialogs:
        [{ name: "Max", id: 1 },
        { name: "Tanchita", id: 2 },
        { name: "Yura", id: 3 },
        { name: "Sanek", id: 4 },
        { name: "Dan", id: 5 },
        { name: "Krista", id: 6 }],
    messages:
        [{ text: "Hey, man!", id: 1, direction: 'from' },
        { text: "How are you?", id: 2, direction: 'from' },
        { text: "Hey! I'm fine. Let's meet today!", id: 3, direction: 'to' },
        { text: "How about 8 o'clock?", id: 4, direction: 'from' },
        { text: "Ok, great!", id: 5, direction: 'to' }]
};
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case send_message :
            let newMessage = {
                text: action.newMessageText, id: 6, direction: 'to'
            }
            return {...state,
                        messages: [...state.messages, newMessage]};
        default: return state;
    }
}

export default dialogsReducer;