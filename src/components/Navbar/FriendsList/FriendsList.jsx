import React from 'react';
import classes from './FriendsList.module.css';
import Friend from './Friend/Friend';

const friendsList = (props) => {
    let friends = props.friends.map (friend => <Friend friendName={friend.name} key={friend.id}/>);
    return (
        <div>
            <h1>Friends</h1>
            <div className={classes.friendsList}>
                {friends}
            </div>
        </div>
    )
}

export default friendsList;