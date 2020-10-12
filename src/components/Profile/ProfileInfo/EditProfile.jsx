import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../../common/Form-controls/Form-controls';
import classes from './ProfileInfo.module.css';
import { Textarea } from './../../common/Form-controls/Form-controls';
import styles from '../../../Utils/commonStyles.module.css'
import { useState, useEffect } from 'react';
import { isWebSite } from './../../common/Form-controls/Form-validators';
import Preloader from '../../common/Preloader/Preloader';

const EditProfile = ({ profile, updatingProfileInProcess, handleSubmit, ...props }) => {
    
    let [lookingForAJob, setLookingForAJob] = useState(true);
    useEffect(() => {setLookingForAJob(profile.lookingForAJob)}, [profile.lookingForAJob])
    let contacts = Object.keys(profile.contacts).map(contact => <div key={contact} className={classes.contact}>
    <Field innerText={contact} name={"contacts." + contact} component={Input} validate={[isWebSite]} /></div>)
    
    return (
        <form className={classes.description} onSubmit={handleSubmit}>
            <div>{props.error && props.error}</div>
            <div className={classes.shortInput}><Field innerText="Full name" name="fullName" component={Input} placeholder="Your name"/> </div>

            <div className={classes.formRow}><span className={classes.semiBold}>Looking for a job:</span>
            <Field className={classes.bigCheckbox} name="lookingForAJob" checked={lookingForAJob} onChange={(e)=>{ setLookingForAJob(!lookingForAJob)}}
            component={Input} type="checkbox"/> </div>

            <div className={classes.shortInput}><Field disabled={!lookingForAJob} innerText="Professional skills" name="lookingForAJobDescription"
             component={Input} placeholder="Your professional skills"/></div>

            <div className={classes.aboutMe}><Field innerText="About me" name="aboutMe" component={Textarea}/></div>
            <div><span className={classes.semiBold}>Contacts:</span></div>
            <div className={classes.contacts}>{contacts}</div>
            
            <div className={classes.bottomSection}>
            {props.updateFetching 
            ? <Preloader />
            :
                <div className={classes.buttons}>
                    <button className={styles.button} type="submit">Save</button>
                    <button className={styles.button} onClick={()=>{updatingProfileInProcess(false)}} type="button">Cancel</button>
                </div>
            }
            </div>
        </form>
    )
}

export default reduxForm({ form: 'edit-profile' })(EditProfile);