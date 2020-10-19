import React from 'react';
import classes from '../../ProfileDescription.module.css';
import defaultPicture from '../../../../../images/user-logo.png';
import cn from 'classnames';

const Post = (props) => {
    return (
        <div className={cn(classes.post, classes.descriptionBlock)}>
            <div className={classes.postText}>
                <div><img className={classes.user} src={props.photo || defaultPicture} alt=""/></div>
                <p>{props.message}</p>
            </div>
            <div className={classes.postInfo}><p>Likes: {props.likesCount}</p></div>
        </div>
    );
}

export default Post;