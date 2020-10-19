import React from 'react';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';
import cn from 'classnames';
import classes from '../ProfileDescription.module.css'

const Posts = (props) => {
    let posts = props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} photo={props.photo}/>);
    posts.reverse();
    return (
        <div className={cn(classes.myPosts, classes.posts)}>
            {!!props.isOwner && <NewPost onSubmit={(data) => {props.addPost(data.newPostText); props.reset('newPost')}}/>}
            {posts}
        </div>
    );
}

export default Posts;