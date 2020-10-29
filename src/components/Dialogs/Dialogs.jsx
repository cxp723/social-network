import React from 'react';
import classes from './Dialogs.module.css';
import Chats from './Chats/Chats';
import Messages from './Messages/Messages';
import NewMessageRedux from './New-message/NewMessage';

const Dialogs = (props) => {
    let userId = props.match.params.userID;
    if (!userId || (props.friends.length > 0 && !props.friends.some(friend => friend.id == userId))) {
        props.history.push('/dialogs/' + Object.keys(props.dialogs)[0]);
    } else {
        if (!!userId && !Object.keys(props.dialogs).includes(userId)) {
            props.createNewChat(userId)
        }
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.chat}>
                <Messages messages={props.dialogs[userId]} />
                <NewMessageRedux onSubmit={(data) => { props.sendMessage(data.newMessageText, userId); props.reset('newMessageForm')}}/>
            </div>

            <Chats dialogs={Object.keys(props.dialogs)} userId={userId} friends={props.friends} />
        </div>
    )
}

export default Dialogs;