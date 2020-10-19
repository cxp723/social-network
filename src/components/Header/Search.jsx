import classes from './Header.module.css';
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

const Search = (props) => {
    let [term, setTerm] = useState('');
    const searchUser = (key) => {
        if (key.keyCode === 13 && term.length > 0) {
            props.history.push('/users/' + term);
            setTerm('');
        } 
    } 
    return (
        <div className={classes.searchBar}>
        <input value={term} placeholder="Search people here" onKeyDown={e => {searchUser(e)}} 
        onChange={(e) => {setTerm(e.currentTarget.value)}} className={classes.searchField}/>
        <div className={classes.iconContainer}><Icon name="sistrix" className={classes.searchIcon}/></div>
        </div>
    )
    
} 

export default withRouter(Search);