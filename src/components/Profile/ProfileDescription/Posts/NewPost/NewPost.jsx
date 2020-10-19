import React from 'react';
import classes from '../../ProfileDescription.module.css';
import { Field, reduxForm } from 'redux-form';
import { required, maxLength } from '../../../../common/Form-controls/Form-validators';
import { Textarea } from '../../../../common/Form-controls/Form-controls';
import cn from 'classnames';

const maxLength100 = maxLength(100);

const NewPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={cn(classes.newPost, classes.descriptionBlock)}>
            <Field component={Textarea} name="newPostText" className={classes.postText} validate={[required, maxLength100]} 
            placeholder = "Write new post here"/>
            <button disabled={!props.valid} className={classes.sendButton} type="submit">Send</button>
        </form>
    )
}
export default reduxForm({form: "newPost"})(NewPost);