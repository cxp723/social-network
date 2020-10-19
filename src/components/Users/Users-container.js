import { connect } from 'react-redux';
import Users from './Users';
import React from 'react';
import { follow, unfollow, getUsers, showMoreUsers, onPageChanged, setTerm, setCurrentPage } from './../../redux/users-reducer';
import { compose } from 'redux';
import { getUsersTotalCount, getUsersWithPhoto } from './../../redux/users-selectors';
import { withRouter } from 'react-router-dom';

class UsersContainer extends React.Component {
    constructor (props) {
        super (props);
        this.state = {term: this.props.term};
    }
    getUsersWithTerm = () => {
        if (this.props.match.params.term) {
        this.setState({term: this.props.match.params.term})
        this.props.getUsers(this.props.currentPage, this.props.pageSize, this.props.match.params.term);
        } else {
            this.props.getUsers(this.props.currentPage, this.props.pageSize, this.props.term);
        }
    }
    componentDidMount () {
        this.props.setCurrentPage(1);
        this.getUsersWithTerm();
    }
    componentDidUpdate (prevProps) {
        if (prevProps.match.params.term !== this.props.match.params.term) {
            this.getUsersWithTerm();
        }
    }

    render () {
        return <Users usersTotalCount={this.props.usersTotalCount}
                        pageSize = {this.props.pageSize} 
                        currentPage = {this.props.currentPage}
                        onPageChanged = {this.props.onPageChanged}
                        users = {this.props.users}
                        follow = {this.props.follow}
                        unfollow = {this.props.unfollow}
                        isFetching = {this.props.isFetching}
                        showMoreUsers = {this.props.showMoreUsers}
                        followingUsers= {this.props.followingUsers}
                        paginationButtonsCount = {this.props.paginationButtonsCount}
                        term = {this.state.term}/>
    }
}
let mapStateToProps = (state) => {
    return {
        users: getUsersWithPhoto(state),
        usersTotalCount : getUsersTotalCount(state),
        paginationButtonsCount: state.usersPage.paginationButtonsCount,
        currentPage : state.usersPage.currentPage,
        pageSize : state.usersPage.pageSize,
        term: state.usersPage.term,
        isFetching: state.usersPage.isFetching,
        followingUsers: state.usersPage.followingUsers
    }
}

let mapDispatchToProps = {follow, unfollow, showMoreUsers, getUsers, onPageChanged, setTerm, setCurrentPage}

export default compose(connect (mapStateToProps, mapDispatchToProps), withRouter)(UsersContainer);
