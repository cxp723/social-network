import React from 'react';
import { connect } from 'react-redux';
import classes from './FriendsList.module.css';
import Friend from './Friend/Friend';
import {getFriends} from '../../../redux/users-reducer'
import { getRandomArr } from '../../../Utils/Array-changers';
import { UserType } from '../../../types/types';
import { AppStateType } from '../../../redux/redux-store';

type StateType = {
    friendsList: Array<UserType>
}
class FriendsList extends React.Component<PropsType, StateType> {
    constructor (props: PropsType) {
        super(props);
        this.state = {friendsList: []}
    }
    componentDidMount () {
        this.props.getFriends();
    }
    componentDidUpdate (prevProps: PropsType) {
        if (this.props.friends && prevProps.friends !== this.props.friends) {
            this.setState({friendsList : getRandomArr(this.props.friends.map (friend =>
            <Friend friendName={friend.name} photo={friend.photos.small ? friend.photos.small : ''} key={friend.id} id = {friend.id}/>), 8)})
        }
    }
    render = () =>  (
            <div className={classes.friendsList}>
                {this.state.friendsList}
            </div>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        friends: state.usersPage.friends
    }
}
type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {getFriends: () => void}
type PropsType = MapStateToPropsType & MapDispatchToPropsType;
const FriendsListContainer = connect(mapStateToProps, {getFriends})(FriendsList);

export default FriendsListContainer;