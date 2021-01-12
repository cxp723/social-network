import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import classes from './../Dialogs.module.css';
import moment from 'moment'
import { MessageType } from '../../../types/types';

type PropsType = {
    messages: Array<MessageType>
}
const Messages: React.FC<PropsType> = ({ messages }) => {
    let endOfMessages = useRef<HTMLInputElement>(null);
    const scrollToBottom = () => {
        !!endOfMessages.current && endOfMessages.current.scrollIntoView(false);
    }
    useEffect(() => {scrollToBottom()}, [messages, endOfMessages]);
    return (
        <div className={classes.messagesContainer}>
            <div className={classes.messages}>
                {!!messages && messages.map(message =>

                    <div key={message.id} className={classes.message + ' ' + (message.direction === 'from' ? classes.from : classes.to)}>
                        <div>{message.text}</div>
                        <div className={classes.messageDate}>{moment(message.date).fromNow()}</div>
                    </div>)}

                <div ref={endOfMessages}/>
            </div>
        </div>
    )
}

export default Messages;