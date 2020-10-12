import React from 'react';
import classes from './login.module.css'
import { Field, reduxForm } from 'redux-form';
import { NavLink, Redirect } from 'react-router-dom';
import { Input } from '../common/Form-controls/Form-controls';
import { required, maxLength } from './../common/Form-controls/Form-validators';
import {login} from '../../redux/auth-reducer'
import { connect } from 'react-redux';
import buttonStyles from '../../Utils/commonStyles.module.css'
import Preloader from './../common/Preloader/Preloader';

const maxLength30 = maxLength(30);
const LoginForm = (props) => {

    return (
        <form className={classes.loginForm} onSubmit={props.handleSubmit}>
            <h1>Please Log In</h1>
            <div className={classes.formRow}><Field type="text" name="email" component={Input}
            innerText="Email" validate={[required, maxLength30]}/></div>
            {props.error &&  <p className={classes.errorMessage}>{props.error}</p>}
            <div className={classes.formRow}><Field type="password" name="password" component={Input}
            innerText="Password" validate={[required, maxLength30]}/></div>
            <div className={classes.formRow}>
                <label className={classes.labelForCheckbox}>
                    <Field type="checkbox" name="rememberMe" component="input" className={classes.checkbox}/> remember me
                </label>
            </div>
            {props.captcha && 
            <div>
                <img src={props.captcha} alt='captcha'/>
                <div><Field type="text" defaultValue="" component={Input} name="captcha" placeholder="Captcha" validate={[required]}/></div>
            </div>}
            {props.isFetching ?
                <Preloader /> :
                <div className={classes.buttons}>
                    <button className={buttonStyles.button}>LogIn</button>
                    <button className={buttonStyles.button}>Cancel</button>
                </div>
            }
            
            <p><NavLink to="restore-password">Forgot password?</NavLink></p>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'loginForm'})(LoginForm);
const Login = (props) => {
    return props.isAuth ? <Redirect to="/profile" />
    : (
        <div className={classes.loginPage}>
            <LoginReduxForm
            isFetching={props.isFetching}
            captcha={props.captcha}
            onSubmit={(formData) => {props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)}}
            />
        </div>
    )
}
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captcha: state.auth.captcha,
        isFetching: state.auth.isFetching
    }
}
export default connect(mapStateToProps, {login})(Login);