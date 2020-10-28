import { sendMessage, createNewChat } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { reset } from 'redux-form';
import { withRouter } from 'react-router-dom';


let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        friends: state.usersPage.friends
    }
}

export default compose(withRouter, connect(mapStateToProps, {sendMessage, createNewChat, reset}), withAuthRedirect)(Dialogs);