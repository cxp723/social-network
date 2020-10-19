import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './FriendsList.module.css';
import Friend from './Friend/Friend';
import {getFriends} from '../../../redux/users-reducer'
import { getRandomArr } from '../../../Utils/Array-changers';

const FriendsList = ({friends, getFriends}) => {
    useEffect (()=> {
        getFriends(1, 100, 'ale');
    }, [getFriends])
    let friendsList = friends.map (friend =>
    <Friend friendName={friend.name} photo={friend.photos.small} key={friend.id} id = {friend.id}/>);

    let randomFriends = getRandomArr(friendsList, 8);
    return (
        <div>
            <div className={classes.friendsList}>
                {randomFriends}
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        friends: state.usersPage.friends
    }
}

const FriendsListContainer = connect(mapStateToProps, {getFriends})(FriendsList);

export default FriendsListContainer;