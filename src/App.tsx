import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import LeftNavbar from './components/Navbar/LeftNavbar';
import RightNavbar from './components/Navbar/RightNavbar';
import { Route, Switch, Redirect } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/Dialogs-container';
import ProfileContainer from './components/Profile/Profile-container';
import HeaderContainer from './components/Header/Header-container';
import Login from './components/Login/Login';
import { initializing } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { connect, Provider } from 'react-redux';
import { withSuspense } from './hoc/withSuspense';
import Footer from './components/Footer/Footer';
import Friends from './components/Friends/Friends';
import store, { AppStateType } from './redux/redux-store';

const UsersContainer = React.lazy(() => import('./components/Users/Users-container'));

type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = { initializing: () => void };
class App extends React.Component<MapStatePropsType & MapDispatchPropsType> {
  componentDidMount() {
    this.props.initializing();
  }
  render() {
    return !this.props.initialized
      ? <Preloader />
      : (
        <div className="app-wrapper">
          <Switch>
            <Route path='/login' render={() => <Login />} />
            <>
              <Route path='/' component={HeaderContainer} />
              <LeftNavbar />
              <div className="content">
                <Switch>
                  <Route exact path='/' render={() => <Redirect to="/profile" />} />
                  <Route path='/dialogs/:userID?' render={() => <DialogsContainer />} />
                  <Route path='/profile/:userID?' render={() => <ProfileContainer />} />
                  {/* 
                  React news page is temporary disabled due to CORS problems
                  <Route path='/news' component={News} /> */}
                  <Route path='/friends' component={Friends} />
                  <Route path='/users' render={withSuspense<{}>(UsersContainer)} />
                  <Route path='*' render={() => <div><h1>Page not found</h1></div>} />
                </Switch>
              </div>
              <RightNavbar />
              <Footer />
            </>
          </Switch>
        </div>
      );
  }
}

const mapStateToProps = (state: AppStateType) => {
  return ({
    initialized: state.app.initialized
  })
}

const ConnectedApp = connect(mapStateToProps, { initializing })(App)

const SocialNetwork = () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
)
export default SocialNetwork;
