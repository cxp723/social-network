import React from 'react';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import classes from './EditProfile.module.css';
import { useState, useEffect } from 'react';
import { isWebSite } from '../../../common/Form-controls/Form-validators';
import Preloader from '../../../common/Preloader/Preloader';
import { Input, Textarea } from '../../../common/Form-controls/Form-controls';
import { Button } from 'semantic-ui-react';
import {ProfileType} from '../../../../types/types'
import { profileFormDataType } from '../ProfileDescription';


type PropsType = {
    profile: ProfileType,
    updatingProfileInProcess: (inProcess: boolean) => void,
    isOwner: boolean,
    updateFetching: boolean
}
const EditProfile: React.FC<PropsType & InjectedFormProps<profileFormDataType, PropsType>> = ({ profile, updatingProfileInProcess, handleSubmit, isOwner, ...props }) => {

    let [lookingForAJob, setLookingForAJob] = useState(true);
    useEffect(() => { setLookingForAJob(profile.lookingForAJob) }, [profile.lookingForAJob])
    useEffect(() => {
        !isOwner && updatingProfileInProcess(false);
    }, [isOwner, updatingProfileInProcess])
    let contacts = Object.keys(profile.contacts).map(contact => <div key={contact} className={classes.contact}>
        <Field innerText={contact} name={"contacts." + contact} component={Input} validate={[isWebSite]} /></div>)

    return (
        <form className={classes.profileForm} onSubmit={handleSubmit}>
            <div>{props.error && props.error}</div>
            <div className={classes.shortInput}><Field innerText="Full name" name="fullName" component={Input} placeholder="Your name" /> </div>

            <div className={classes.formRow}><span className={classes.semiBold}>Looking for a job: </span>
                <Field className={classes.bigCheckbox} name="lookingForAJob" checked={lookingForAJob} onChange={() => { setLookingForAJob(!lookingForAJob) }}
                    component={Input} type="checkbox" /> </div>

            <div className={classes.shortInput}><Field disabled={!lookingForAJob} innerText="Professional skills" name="lookingForAJobDescription"
                component={Input} placeholder="Your professional skills" /></div>

            <div className={classes.aboutMe}><Field innerText="About me" name="aboutMe" component={Textarea} /></div>
            <div><span className={classes.semiBold}>Contacts:</span></div>
            <div className={classes.contacts}>{contacts}</div>

            <div className={classes.bottomSection}>
                {props.updateFetching
                    ? <Preloader />
                    :
                
            <Button.Group>
                <Button onClick={()=>{updatingProfileInProcess(false)}}>Cancel</Button>
                <Button.Or />
                <Button color='orange' type="submit">Save</Button>
            </Button.Group>}
            </div>
        </form>
    )
}

export default reduxForm<profileFormDataType, PropsType>({ form: 'edit-profile' })(EditProfile);