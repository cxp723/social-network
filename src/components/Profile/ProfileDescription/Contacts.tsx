import React from "react";
import classes from "./ProfileDescription.module.css";
import cn from "classnames";
import { Button, Icon } from "semantic-ui-react";
import { ContactsOption, ContactsType } from "../../../types/types";

type PropsType = {
  contacts: ContactsType;
};
const Contacts: React.FC<PropsType> = ({ contacts }) => {
  let mappedContacts: Array<ContactsOption> = Object.keys(
    contacts
  ) as Array<ContactsOption>;
  let profileContacts = mappedContacts.map((contact) => {
    if (contacts[contact]) {
      switch (contact) {
        case "website":
        case "mainLink":
        case "github":
          return (
            <Button
              href={contacts[contact]}
              target="blank"
              color="yellow"
              key={contact}
            >
              <Icon name="github" /> {contact}
            </Button>
          );
        default:
          return (
            <Button
              href={contacts[contact]}
              target="blank"
              color={contact}
              key={contact}
            >
              <Icon name={contact} /> {contact}
            </Button>
          );
      }
    } else return null;
  });
  return (
    <div
      id="contacts"
      className={cn(classes.descriptionBlock, classes.contacts)}
    >
      <h1 className={classes.title}>Contacts:</h1>
      <Button.Group vertical widths="4">
        {profileContacts}
      </Button.Group>
    </div>
  );
};
export default Contacts;
