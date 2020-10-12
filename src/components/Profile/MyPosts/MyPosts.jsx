import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

import NewPost from './NewPost/NewPost';

const MyPosts = (props) => {
    let posts = props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} photo={props.photo}/>);
    posts.reverse();
    return (
        <div className={classes.myPosts}>
            <h1>My posts</h1>
            <NewPost onSubmit={(data) => {props.addPost(data.newPostText)}}/>
            {posts}
        </div>
    );
}

export default MyPosts;