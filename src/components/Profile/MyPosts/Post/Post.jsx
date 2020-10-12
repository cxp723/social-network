import React from 'react';
import classes from './Post.module.css';
import defaultPicture from './../../../../images/user-logo.png';
const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.postText}>
                <div><img className={classes.user} src={props.photo || defaultPicture} alt=""/></div>
                <p>{props.message}</p>
            </div>
            <div className={classes.postInfo}><p>Likes: {props.likesCount}</p></div>
        </div>
    );
}

export default Post;