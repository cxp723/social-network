import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import classes from './../Dialogs.module.css';

const Messages = ({ messages }) => {
    let endOfMessages = useRef(null);
    const scrollToBottom = () => {
        endOfMessages.current.scrollIntoView();
    }
    useEffect(() => {scrollToBottom()}, [messages, endOfMessages]);
    return (
        <div className={classes.messagesContainer}>
            <div className={classes.messages}>
                {messages.map(message =>

                    <div key={message.id} className={classes.message + ' ' + (message.direction === 'from' ? classes.from : classes.to)}>
                        {message.text}
                    </div>)}

                <div ref={endOfMessages}/>
            </div>
        </div>
    )
}

export default Messages;