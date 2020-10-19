import React from 'react'
import { Dropdown, Image } from 'semantic-ui-react'

import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'

const UserMenu = (props) => {
    const trigger = (
        <span className={classes.dropdownMenu}>
          <Image avatar src={props.photo} /> {props.name}
        </span>
      )
      
      const options = [
        {
          key: 'user',
          text: (
            <span className={classes.menuTitle}>
              Signed in as <strong>{props.login}</strong>
            </span>
          ),
          disabled: true,
        },
        { key: 'profile', icon: 'user', content: (<NavLink className={classes.option} to="profile">Account</NavLink>) },
        { key: 'settings', icon: 'settings', content: (<NavLink to="settings" className={classes.option}>Settings</NavLink>) },
        { key: 'sign-out', icon: 'sign out', content: (<span className={classes.option} onClick={props.logout}>Log Out</span>) }
      ]

    return (
        <Dropdown trigger={trigger} floating options={options} className={classes.menuContainer}/>
    )
}
  

export default UserMenu;