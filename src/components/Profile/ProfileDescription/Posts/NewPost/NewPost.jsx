import React from 'react';
import classes from '../../ProfileDescription.module.css';
import { Field, reduxForm } from 'redux-form';
import { maxLength } from '../../../../common/Form-controls/Form-validators';
import { Textarea } from '../../../../common/Form-controls/Form-controls';
import cn from 'classnames';
import { required } from './../../../../common/Form-controls/Form-validators';
import { Button } from 'semantic-ui-react';

const maxLength500 = maxLength(500);

const NewPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={cn(classes.newPost, classes.descriptionBlock)}>
            <Field component={Textarea} name="newPostText" validate={[maxLength500]} 
            innerText = "Write new post here"/>
            <Button disabled={!props.dirty} color='orange' type="submit">Send</Button>
        </form>
    )
}
export default reduxForm({form: "newPost"})(NewPost);