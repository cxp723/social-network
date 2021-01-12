import React from 'react';
import classes from '../../ProfileDescription.module.css';
import defaultPicture from '../../../../../images/user-logo.png';
import cn from 'classnames';
import PostDropdownMenu from './PostDropdownMenu';
import { Icon, Button, Label } from 'semantic-ui-react';
import { useState } from 'react';

type PropsType = {
    photo: string | null,
    name: string,
    date: Date,
    isOwner: boolean,
    text: string,
    likesCount: number,
    deletePost: (postId: number) => void,
    postId: number,
    likePost: (postId: number) => void
}
const Post: React.FC<PropsType> = ({photo, name, date, isOwner, text, likesCount, deletePost, postId, likePost}) => {
    let [liked, setLiked] = useState(false);
    return (
        <div className={cn(classes.post, classes.descriptionBlock)}>
            <div className={classes.postHeader}>
                <div className={classes.author}>
                    <img className={classes.user} src={photo || defaultPicture} alt=""/>
                    <div>
                        <p className={classes.userName}>{name}</p>
                        <p className={classes.date}>{date.toDateString()}</p>
                    </div>
                </div>
                {isOwner && <PostDropdownMenu deletePost={deletePost} postId={postId}/>}
            </div>
            <div className={classes.postText}>
               {text}
            </div>
            <div className={classes.postInfo}>
                <div>
                    <Button circular color='facebook' icon='facebook' target='blank'
                    href={'http://www.facebook.com/sharer.php?s=100&p[summary]=' + encodeURIComponent(text)}/>
                    <Button circular color='twitter' icon='twitter' target='blank'
                    href={'http://twitter.com/share?text=' + encodeURIComponent(text)}/>
                    <Button circular color='vk' icon='vk' target='blank'
                    href={'http://vkontakte.ru/share.php?description=' + encodeURIComponent(text)}/>
                </div>
                <div className={classes.likes}>
                    <Button as='div' labelPosition='right'>
                        <Button basic={liked} color='red' onClick={() => {likePost(postId); setLiked(true)}}>
                            <Icon name='heart' />
                            {liked ? 'Liked' : 'Like'}
                        </Button>
                        <Label as='a' basic color='red' pointing='left'>
                            {likesCount}
                        </Label>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Post;