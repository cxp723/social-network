import { ActionsType, DialogType } from "../types/types";

export const actions = {
  sendMessage: (newMessageText: string, userId: number) =>
    ({ type: "SEND_MESSAGE", newMessageText, userId } as const),
  createNewChat: (userId: number) =>
    ({ type: "CREATE_NEW_CHAT", userId } as const),
};

type DialogsActionsType = ActionsType<typeof actions>;

type InitialStateType = { dialogs: Array<DialogType> };
const initialState: InitialStateType = {
  dialogs: [
    {
      userId: 8349,
      messages: [
        {
          text: "Hey, man!",
          id: 1,
          direction: "from",
          date: new Date(2020, 9, 10, 12, 34, 23, 0),
        },
        {
          text: "How are you?",
          id: 2,
          direction: "from",
          date: new Date(2020, 9, 10, 12, 35, 23, 0),
        },
        {
          text: "Hey! I'm fine. Let's meet today!",
          id: 3,
          direction: "to",
          date: new Date(2020, 9, 10, 12, 36, 23, 0),
        },
        {
          text: "How about 8 o'clock?",
          id: 4,
          direction: "from",
          date: new Date(2020, 9, 10, 12, 37, 23, 0),
        },
        {
          text: "Ok, great!",
          id: 5,
          direction: "to",
          date: new Date(2020, 9, 10, 12, 38, 23, 0),
        },
        {
          text: "See you tomorrow!",
          id: 6,
          direction: "to",
          date: new Date(2020, 9, 10, 12, 39, 23, 0),
        },
        {
          text: "Don't forget you umbrella, it's gonna be rainy tomorrow:(",
          id: 7,
          direction: "from",
          date: new Date(2020, 9, 10, 12, 42, 23, 0),
        },
        {
          text: "Sure)",
          id: 8,
          direction: "to",
          date: new Date(2020, 9, 10, 12, 45, 23, 0),
        },
        {
          text: "You too!",
          id: 9,
          direction: "to",
          date: new Date(2020, 9, 10, 12, 51, 23, 0),
        },
      ],
    },

    {
      userId: 9510,
      messages: [
        {
          text: "Hi!",
          id: 1,
          direction: "from",
          date: new Date(2020, 8, 2, 11, 34, 23, 0),
        },
        {
          text: "I have a problem with the hometask:(",
          id: 2,
          direction: "from",
          date: new Date(2020, 8, 2, 11, 35, 23, 0),
        },
        {
          text: "Hey! How can I help you?",
          id: 3,
          direction: "to",
          date: new Date(2020, 8, 2, 11, 36, 23, 0),
        },
        {
          text: "I don't have materials from last lection(",
          id: 4,
          direction: "from",
          date: new Date(2020, 8, 2, 11, 37, 23, 0),
        },
        {
          text: "I'll send you them!",
          id: 5,
          direction: "to",
          date: new Date(2020, 8, 2, 11, 38, 23, 0),
        },
        {
          text: "Don't worry!",
          id: 6,
          direction: "to",
          date: new Date(2020, 8, 2, 11, 39, 23, 0),
        },
        {
          text: "You're saving me!",
          id: 7,
          direction: "from",
          date: new Date(2020, 8, 2, 11, 40, 23, 0),
        },
        {
          text: "Thank you)",
          id: 8,
          direction: "from",
          date: new Date(2020, 8, 2, 11, 41, 23, 0),
        },
        {
          text: "No problem)",
          id: 9,
          direction: "to",
          date: new Date(2020, 8, 2, 11, 45, 23, 0),
        },
      ],
    },

    {
      userId: 7180,
      messages: [
        {
          text: "psss",
          id: 1,
          direction: "from",
          date: new Date(2020, 9, 12, 11, 34, 23, 0),
        },
        {
          text: "How are you?",
          id: 2,
          direction: "from",
          date: new Date(2020, 9, 12, 12, 34, 23, 0),
        },
        {
          text: "I'm great! Wanna meet today?",
          id: 3,
          direction: "to",
          date: new Date(2020, 9, 12, 13, 34, 23, 0),
        },
        {
          text: "How about 5 o'clock?",
          id: 4,
          direction: "from",
          date: new Date(2020, 9, 12, 14, 34, 23, 0),
        },
        {
          text: "Ok, great!",
          id: 5,
          direction: "to",
          date: new Date(2020, 9, 12, 15, 34, 23, 0),
        },
        {
          text: "See you soon!",
          id: 6,
          direction: "to",
          date: new Date(2020, 9, 12, 16, 34, 23, 0),
        },
        {
          text: "Take some snacks, please)",
          id: 7,
          direction: "from",
          date: new Date(2020, 9, 12, 17, 34, 23, 0),
        },
        {
          text: "Ok, I'm hungry too)",
          id: 8,
          direction: "to",
          date: new Date(2020, 9, 12, 18, 34, 23, 0),
        },
        {
          text: "Prepare yourself!)",
          id: 9,
          direction: "to",
          date: new Date(2020, 9, 12, 19, 34, 23, 0),
        },
      ],
    },

    {
      userId: 7084,
      messages: [
        {
          text: "Hi, darling",
          id: 1,
          direction: "to",
          date: new Date(2020, 9, 10, 11, 34, 23, 0),
        },
        {
          text: "Hi, cutee!)",
          id: 2,
          direction: "from",
          date: new Date(2020, 9, 10, 11, 34, 25, 0),
        },
        {
          text: "I miss you! How about tomorrow? Have some plans?",
          id: 3,
          direction: "to",
          date: new Date(2020, 9, 10, 11, 35, 23, 0),
        },
        {
          text: "I have a huge load of crap on my job(( ",
          id: 4,
          direction: "from",
          date: new Date(2020, 9, 10, 11, 36, 23, 0),
        },
        {
          text: "Maybe on monday?",
          id: 5,
          direction: "from",
          date: new Date(2020, 9, 10, 11, 37, 23, 0),
        },
        {
          text: "Sure, why not))",
          id: 6,
          direction: "to",
          date: new Date(2020, 9, 10, 11, 40, 23, 0),
        },
        {
          text: "So, will see you on monday:(",
          id: 7,
          direction: "from",
          date: new Date(2020, 9, 10, 11, 42, 23, 0),
        },
        {
          text: "Can't wait)",
          id: 8,
          direction: "from",
          date: new Date(2020, 9, 10, 11, 44, 23, 0),
        },
        {
          text: "Me too!",
          id: 9,
          direction: "to",
          date: new Date(2020, 9, 10, 11, 46, 23, 0),
        },
      ],
    },

    {
      userId: 11753,
      messages: [
        {
          text: "Hey, man!",
          id: 1,
          direction: "from",
          date: new Date(2020, 9, 5, 11, 34, 23, 0),
        },
        {
          text: "Have some news?",
          id: 2,
          direction: "from",
          date: new Date(2020, 9, 5, 11, 34, 27, 0),
        },
        {
          text: "Nope, sorry(",
          id: 3,
          direction: "to",
          date: new Date(2020, 9, 5, 11, 34, 35, 0),
        },
        {
          text: "Okay, I'll wait)",
          id: 4,
          direction: "from",
          date: new Date(2020, 9, 5, 11, 34, 47, 0),
        },
        {
          text:
            "Good news! Your photos are ready. You can get them tomorrow in the office from 9 till 17 o'clock!",
          id: 5,
          direction: "to",
          date: new Date(2020, 9, 5, 11, 34, 53, 0),
        },
        {
          text: "Great!",
          id: 6,
          direction: "from",
          date: new Date(2020, 9, 5, 11, 35, 23, 0),
        },
        {
          text: "I'll come on the afternoon",
          id: 7,
          direction: "from",
          date: new Date(2020, 9, 5, 11, 37, 23, 0),
        },
        {
          text: "Okay",
          id: 8,
          direction: "to",
          date: new Date(2020, 9, 5, 11, 45, 23, 0),
        },
        {
          text: "Don't forget passport!",
          id: 9,
          direction: "to",
          date: new Date(2020, 9, 5, 13, 34, 23, 0),
        },
        {
          text: "Sure!",
          id: 10,
          direction: "from",
          date: new Date(2020, 9, 6, 11, 34, 23, 0),
        },
      ],
    },
  ],
};
const dialogsReducer = (state = initialState, action: DialogsActionsType) => {
  switch (action.type) {
    case "SEND_MESSAGE":
      let id = state.dialogs.find((dialog) => dialog.userId === action.userId)
        ?.messages.length;
      let newMessage = {
        text: action.newMessageText,
        id: id ? id + 1 : 1,
        direction: "to",
        date: new Date(),
      };
      return {
        ...state,
        dialogs: state.dialogs.map((dialog) =>
          dialog.userId === action.userId
            ? { ...dialog, messages: dialog.messages.concat(newMessage) }
            : dialog
        ),
      };
    case "CREATE_NEW_CHAT":
      return {
        ...state,
        dialogs: state.dialogs.concat({ userId: action.userId, messages: [] }),
      };
    default:
      return state;
  }
};

export default dialogsReducer;
