import FriendsList from './FriendsList';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friendsList
    }
}
let mapDispatchToProps = (dispatch) => {
    return {}
}
const FriendsListContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsList);

export default FriendsListContainer;