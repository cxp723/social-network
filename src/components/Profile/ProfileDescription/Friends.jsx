import React from 'react';
import classes from './ProfileDescription.module.css'
import cn from 'classnames';
import { getRandomArr } from '../../../Utils/Array-changers';
import Friend from './../../Navbar/FriendsList/Friend/Friend';
import { connect } from 'react-redux';

const Friends = ({friends}) => {
    let randomFriends = getRandomArr(friends, 8);
    console.log(randomFriends);
    let friendsArr = randomFriends.map(friend => {
    return <Friend photo={friend[0].photos.small} key={friend[0].id} id = {friend[0].id}><div>{friend[0].name}</div></Friend>
    })
    return (
        <div className={cn(classes.descriptionBlock, classes.friends)}>
            <h1 className={classes.title}>Friends:</h1>
            <div className={classes.friendsBlock}>
                {friendsArr}
            </div>
        </div>
    )
}
export default connect((state) => ({friends: state.usersPage.friends}))(Friends);