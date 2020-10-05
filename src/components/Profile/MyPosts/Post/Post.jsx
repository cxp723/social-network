import React from 'react';
import classes from './Post.module.css';
const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.postText}>
                <div className={classes.user}></div>
                <p>{props.message}</p>
            </div>
            <div className={classes.postInfo}><p>Likes: {props.likesCount}</p></div>
        </div>
    );
}

export default Post;