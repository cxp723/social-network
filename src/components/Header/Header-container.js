import Header from './Header';
import { logout } from './../../redux/auth-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

let mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        name: state.auth.name,
        photo: state.auth.photo
    }
}

let HeaderContainer = compose (withRouter, connect (mapStateToProps, {logout}))(Header);

export default HeaderContainer;