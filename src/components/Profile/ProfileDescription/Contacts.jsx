import React from 'react';
import classes from './ProfileDescription.module.css';
import cn from 'classnames';
import { Button, Icon } from 'semantic-ui-react';

const Contacts = ({contacts}) => {
    let profileContacts = Object.keys(contacts).map(
        (contact) => !!contacts[contact] && 
                <Button href={contacts[contact]} target='blank' color={contact} key={contact}>
                    <Icon name={contact} /> {contact}
                </Button>)
    return (
        <div id="contacts" className={cn(classes.descriptionBlock, classes.contacts)}>
            <h1 className={classes.title}>Contacts:</h1>
                <Button.Group vertical widths='4'>
                    {profileContacts}
                </Button.Group>
        </div>
    )
}
export default Contacts;