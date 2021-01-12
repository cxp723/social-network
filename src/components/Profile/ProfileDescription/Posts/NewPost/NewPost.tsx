import React from 'react';
import classes from '../../ProfileDescription.module.css';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { maxLength } from '../../../../common/Form-controls/Form-validators';
import { Textarea } from '../../../../common/Form-controls/Form-controls';
import cn from 'classnames';
import { Button } from 'semantic-ui-react';
import { NewPostTextType } from '../Posts';

const maxLength500 = maxLength(500);

const NewPost: React.FC<InjectedFormProps<NewPostTextType>> = ({handleSubmit, dirty}) => {
    return (
        <form onSubmit={handleSubmit} className={cn(classes.newPost, classes.descriptionBlock)}>
            <Field component={Textarea} name="newPostText" validate={[maxLength500]} 
            innerText = "Write new post here"/>
            <Button disabled={!dirty} color='orange' type="submit">Send</Button>
        </form>
    )
}
export default reduxForm<NewPostTextType>({form: "newPost"})(NewPost);