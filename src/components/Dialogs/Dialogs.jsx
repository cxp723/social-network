import React from 'react';
import classes from './Dialogs.module.css';
import Chats from './Chats/Chats';
import Messages from './Messages/Messages';
import NewMessageRedux from './New-message/NewMessage';
import { useDispatch } from 'react-redux';
import { reset } from 'redux-form';

const Dialogs = (props) => {
    const dispatch = useDispatch();
    const clearField = () => dispatch(reset('newMessageForm'));
    return (
        <div className={classes.dialogs}>
            <Chats dialogs={props.dialogs} />
            <div className={classes.chat}>
                <Messages messages={props.messages} />
                <NewMessageRedux onSubmit={(data) => {props.sendMessage(data.newMessageText); clearField()}}/>
            </div>
        </div>
    )
}

export default Dialogs;