import React from 'react';
import classes from './Dialogs.module.css';
import Chats from './Chats/Chats';
import Messages from './Messages/Messages';
import NewMessageRedux from './New-message/NewMessage';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <Chats dialogs={props.dialogs} />
            <div className={classes.chat}>
                <Messages messages={props.messages} />
                <NewMessageRedux onSubmit={(data) => {props.sendMessage(data.newMessageText)}}/>
            </div>
        </div>
    )
}

export default Dialogs;