import React from 'react';
import classes from './../Dialogs.module.css';

const Messages = (props) => {
    let messages = props.messages.map ( message => <div key={message.id}
        className={classes.message + ' ' + (message.direction === 'from' ? classes.from : classes.to)}>
            {message.text}</div>);
    return (
        <div className={classes.messages}>
            {messages}
        </div>
    )
}

export default Messages;