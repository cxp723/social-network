import React from 'react';
import preloader from '../../../images/Preloader.gif';
import classes from './preloader.module.css';

let Preloader = () => {
    return (
        <div className={classes.preloder}>
            <img src={preloader} alt="preloader" className={classes.image}/>
        </div>
    )
}

export default Preloader;