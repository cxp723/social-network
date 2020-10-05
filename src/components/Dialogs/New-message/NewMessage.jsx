import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from '../Dialogs.module.css';
import { Textarea } from './../../common/Form-controls/Form-controls';
import { required, maxLength } from './../../common/Form-controls/Form-validators';

const maxLength50 = maxLength (50);

const NewMessage = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.newMessage}>
            <Field component={Textarea} className={classes.newMessageText} name="newMessageText" validate={[required, maxLength50]}/>
            <button disabled={!props.valid} className={classes.send} type="submit">Send</button>
        </form>
    )
}

const NewMessageRedux = reduxForm({form: "newMessageForm"})(NewMessage);

export default NewMessageRedux;