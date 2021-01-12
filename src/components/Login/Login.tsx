import React from 'react';
import classes from './login.module.css'
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { Input } from '../common/Form-controls/Form-controls';
import { required, maxLength } from '../common/Form-controls/Form-validators';
import { login } from '../../redux/auth-reducer'
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { AppStateType } from '../../redux/redux-store';

//redux form props??
const maxLength30 = maxLength(30);

type OwnPropsType = {
    isFetching: boolean,
    captcha: string | null
}
const LoginForm: React.FC<OwnPropsType & InjectedFormProps<FormDataType, OwnPropsType>> = (props) => {

    return (
        <div className={classes.wrapper}>
            <div className={classes.greetingText}>
                <h1 className={classes.greetingTitle}>Welcome to my Social Network</h1>
                <p>My name is Aleksandr Kirichenko, I'm React developer and this is my simple project of Social Network. 
                    Development is still in progress, so some pages and modules are hardcoded or just emulate interaction with server.
                    For acquaintance with this application, please use guest account: kirichenko723@gmail.com, password: test</p>
                <p>I'll be glad to answer all your questions. Contact me:</p>
                <p> +7 (918) 048 14 90 (Viber, WhatsApp, Telegram).</p>
            </div>

            <form className={classes.loginForm} onSubmit={props.handleSubmit}>

                <h1 className={classes.header}>Login to your Account</h1>

                <div className={classes.formRow}>
                    <Field type="text" name="email" component={Input}
                    innerText="Email" validate={[required, maxLength30]}/>
                </div>

                {props.error && <p className={classes.errorMessage}>{props.error}</p>}

                <div className={classes.formRow}>
                    <Field type="password" name="password" component={Input}
                    innerText="Password" validate={[required, maxLength30]}/>
                </div>

                <div className={classes.formRow}>
                    <label className={classes.labelForCheckbox}>
                        <Field type="checkbox" name="rememberMe" component="input" className={classes.checkbox} /> remember me
                    </label>
                </div>
                {props.captcha &&
                    <div>
                        <img src={props.captcha} alt='captcha' />
                        <div><Field type="text" defaultValue="" component={Input} name="captcha" placeholder="Captcha" validate={[required]} /></div>
                    </div>
                }
                {props.isFetching ?
                    <Button className={classes.button} loading fluid type="submit">Login</Button> :
                    <Button className={classes.button} fluid type="submit">Login</Button>
                }
            </form>
            
        </div>
    )
}
type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
const LoginReduxForm = reduxForm<FormDataType, OwnPropsType>({ form: 'loginForm' })(LoginForm);
const Login: React.FC<ConnectedPropsType> = (props) => {
    return props.isAuth ? <Redirect to="/profile" />
        : (
            <div className={classes.loginPage}>
                <LoginReduxForm
                    isFetching={props.isFetching}
                    captcha={props.captcha}
                    onSubmit={(formData: FormDataType) => { props.login(formData.email, formData.password, formData.rememberMe, formData.captcha) }}
                />
            </div>
        )
}
const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        captcha: state.auth.captcha,
        isFetching: state.auth.isFetching
    }
}
type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {login: (email: string, password: string, rememberMe: boolean, captcha: string) => void}
type ConnectedPropsType = MapStateToPropsType & MapDispatchToPropsType;
export default connect(mapStateToProps, { login })(Login);