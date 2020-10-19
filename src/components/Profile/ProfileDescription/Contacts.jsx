import React from 'react';
import classes from './ProfileDescription.module.css';
import cn from 'classnames';

const Contacts = ({contacts}) => {
    let profileContacts = Object.keys(contacts).map(
        (contact) => !!contacts[contact] && <div key={contact}>
            {contact}: <a href={contacts[contact]} target="blank"> {contacts[contact]}</a></div>)
    return (
        <div className={cn(classes.descriptionBlock, classes.contacts)}>
            <h1 className={classes.title}>Contacts:</h1>
                {profileContacts}
        </div>
    )
}
export default Contacts;