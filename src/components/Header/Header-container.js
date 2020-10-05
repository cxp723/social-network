import React from 'react';
import Header from './Header';
import { logout } from './../../redux/auth-reducer';
import { connect } from 'react-redux';

class HeaderAPIContainer extends React.Component {
    render () {
        return (
            <Header login={this.props.login} logout={this.props.logout}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
    }
}

let HeaderContainer = connect (mapStateToProps, {logout})(HeaderAPIContainer);

export default HeaderContainer;