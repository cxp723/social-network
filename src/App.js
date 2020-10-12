import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/Dialogs-container';
import ProfileContainer from './components/Profile/Profile-container';
import HeaderContainer from './components/Header/Header-container';
import Login from './components/Login/Login';
import { initializing } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { connect } from 'react-redux';
import {withSuspense} from './hoc/withSuspense';
import Footer from './components/Footer/Footer';

const UsersContainer = React.lazy(() => import('./components/Users/Users-container'));


class App extends React.Component {
  componentDidMount () {
    this.props.initializing();
  }
  render() {
    return !this.props.initialized
    ?  <Preloader />
    : (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="content">
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/profile/:userID?' render={() => <ProfileContainer />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          <Route path='/users' render={withSuspense(UsersContainer)} />
          <Route path='/login' render={() => <Login />} />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    initialized: state.app.initialized
  })
}
export default connect(mapStateToProps, {initializing})(App);
