import React from 'react';
import classes from './ProfileDescription.module.css'
import cn from 'classnames';
import { getRandomArr } from '../../../Utils/Array-changers';
import Friend from '../../Navbar/FriendsList/Friend/Friend';
import { connect } from 'react-redux';
import { UserType } from '../../../types/types';
import { AppStateType } from '../../../redux/redux-store';

type PropsType = {friends: Array<UserType>};

const Friends: React.FC<PropsType> = ({friends}) => {
    let randomFriends: Array<UserType> = getRandomArr(friends, 8);
    let friendsArr = randomFriends.map(friend => {
    return <Friend photo={friend.photos.small} key={friend.id} id = {friend.id}><div>{friend.name}</div></Friend>
    })
    return (
        <div className={cn(classes.descriptionBlock, classes.friends)} id="friends">
            <h1 className={classes.title}>Friends:</h1>
            <div className={classes.friendsBlock}>
                {friendsArr}
            </div>
        </div>
    )
}
export default connect((state: AppStateType) => ({friends: state.usersPage.friends}))(Friends);