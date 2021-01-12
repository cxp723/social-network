import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Button } from 'semantic-ui-react';
import classes from '../Dialogs.module.css';
import { Textarea } from '../../common/Form-controls/Form-controls';
import { maxLength } from '../../common/Form-controls/Form-validators';
import { NewMessageType } from '../Dialogs';


//reduxForm props??
const maxLength200 = maxLength (200);
const NewMessage: React.FC<InjectedFormProps<NewMessageType>> = (props) => {
    const ifEnterSend = (key: React.KeyboardEvent<HTMLInputElement>) => {
        if (key.keyCode === 13) {
            key.preventDefault();
            props.handleSubmit(key);
        }
    }
    return (
        <form onSubmit={props.handleSubmit} className={classes.newMessage}>
            <Field component={Textarea} onKeyDown={(key: React.KeyboardEvent<HTMLInputElement>) => {ifEnterSend(key)}} className={classes.newMessageText} placeholder="Write your message here..."
            name="newMessageText" validate={[maxLength200]}/>
            <Button disabled={!props.dirty} className={classes.send} color="purple" type="submit">Send</Button>
        </form>
    )
}

const NewMessageRedux = reduxForm<NewMessageType>({form: "newMessageForm"})(NewMessage);

export default NewMessageRedux;