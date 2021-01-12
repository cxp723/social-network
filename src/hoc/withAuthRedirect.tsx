import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppStateType } from '../redux/redux-store';

const mapStateToPropsForRedirect = (state: AppStateType) => {
    return {isAuth: state.auth.isAuth}
}
type MapStateToPropsType = ReturnType<typeof mapStateToPropsForRedirect>
export const withAuthRedirect = (Component: React.ComponentType) => {
    const RedirectComponent: React.FC<MapStateToPropsType> = ({isAuth, ...props}) => {
        return !isAuth
        ? <Redirect to='/login'/>
        : <Component {...props} />
        }
    const ConnectedRedirectComponent = connect (mapStateToPropsForRedirect)(RedirectComponent);
    return ConnectedRedirectComponent;
}