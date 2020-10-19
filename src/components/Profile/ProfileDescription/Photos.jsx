import React from 'react';
import classes from './ProfileDescription.module.css';
import cn from 'classnames';

const Photos = () => {
    return (
        <div className={cn(classes.descriptionBlock, classes.photos)}>
            <h1 className={classes.title}>Album:</h1>
            
        </div>
    )
}
export default Photos;