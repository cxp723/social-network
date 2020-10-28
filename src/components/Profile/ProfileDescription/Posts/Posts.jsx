import React from 'react';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';
import cn from 'classnames';
import classes from '../ProfileDescription.module.css'

const Posts = ({addPost, deletePost, reset, posts, likePost, ...props}) => {
    let postsList = posts.map(post => <Post  likePost={likePost} key={post.id} isOwner = {props.isOwner} date={post.date} postId={post.id}
        name ={props.name} text={post.message} likesCount={post.likesCount} photo={props.photo} deletePost={deletePost}/>);
    postsList.reverse();
    return (
        <div className={cn(classes.myPosts, classes.posts)} id="posts">
            {!!props.isOwner && <NewPost onSubmit={(data) => {addPost(data.newPostText); reset('newPost')}}/>}
            {postsList}
        </div>
    );
}

export default Posts;