import React from 'react';
import { connect } from 'react-redux';
import classes from './FriendsList.module.css';
import Friend from './Friend/Friend';
import {getFriends} from '../../../redux/users-reducer'
import { getRandomArr } from '../../../Utils/Array-changers';

class FriendsList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {friendsList: []}
    }
    componentDidMount () {
        this.props.getFriends();
    }
    componentDidUpdate (prevProps) {
        if (this.props.friends && prevProps.friends !== this.props.friends) {
            this.setState({friendsList : getRandomArr(this.props.friends.map (friend =>
            <Friend friendName={friend.name} photo={friend.photos.small} key={friend.id} id = {friend.id}/>), 8)})
        }
    }
    render () {return (
        <div>
            <div className={classes.friendsList}>
                {this.state.friendsList}
            </div>
        </div>
    )}
}

let mapStateToProps = (state) => {
    return {
        friends: state.usersPage.friends
    }
}

const FriendsListContainer = connect(mapStateToProps, {getFriends})(FriendsList);

export default FriendsListContainer;