import React from "react";
import classes from "./Dialogs.module.css";
import Chats from "./Chats/Chats";
import Messages from "./Messages/Messages";
import NewMessageRedux from "./New-message/NewMessage";
import { DialogType, MessageType, UserType } from "../../types/types";

//Some changes will be here
type PropsType = {
  messages: Array<MessageType>;
  userId: number;
  friends: Array<UserType>;
  dialogs: Array<DialogType>;
  sendMessage: (message: string, userId: number) => void;
  reset: (formName: string) => void;
};
export type NewMessageType = { newMessageText: string };
const Dialogs: React.FC<PropsType> = ({
  messages,
  userId,
  friends,
  dialogs,
  sendMessage,
  reset,
}) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.chat}>
        <Messages messages={messages} />
        <NewMessageRedux
          onSubmit={(data: NewMessageType) => {
            sendMessage(data.newMessageText, userId);
            reset("newMessageForm");
          }}
        />
      </div>
      <Chats dialogs={dialogs} userId={userId} friends={friends} />
    </div>
  );
};

export default Dialogs;
