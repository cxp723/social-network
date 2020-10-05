import React from 'react';
import classes from './login.module.css'
import { Field, reduxForm } from 'redux-form';
import { NavLink, Redirect } from 'react-router-dom';
import { Input } from '../common/Form-controls/Form-controls';
import { required, maxLength } from './../common/Form-controls/Form-validators';
import {login} from '../../redux/auth-reducer'
import { connect } from 'react-redux';

const maxLength30 = maxLength(30);
const LoginForm = (props) => {
    return (
        <form className={classes.loginForm} onSubmit={props.handleSubmit}>
            <h1>Please Log In</h1>
            <div className={classes.formRow}><Field type="text" name="email" component={Input} placeholder="Email" validate={[required, maxLength30]}/></div>
            {props.error &&  <p className={classes.errorMessage}>{props.error}</p>}
            <div className={classes.formRow}><Field type="password" name="password" component={Input} placeholder="Password" validate={[required, maxLength30]}/></div>
            <div className={classes.formRow}><Field type="checkbox" name="rememberMe" component="input"/><span> remember me</span></div>
            <div className={classes.buttons}><button>LogIn</button> <button>Cancel</button></div>
            <p><NavLink to="restore-password">Forgot password?</NavLink></p>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'loginForm'})(LoginForm);
const Login = (props) => {
    return props.isAuth ? <Redirect to="/profile" />
    : (
        <div className={classes.loginPage}>
            <LoginReduxForm onSubmit={(formData) => {props.login(formData.email, formData.password, formData.rememberMe)}}/>
        </div>
    )
}
let mapStateToProps = (state) => {
    return {isAuth: state.auth.isAuth}
}
export default connect(mapStateToProps, {login})(Login);