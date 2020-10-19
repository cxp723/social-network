import React from 'react';
import classes from './Users.module.css'
import User from './User/User';
import Preloader from '../common/Preloader/Preloader';
import Paginator from '../common/Paginator/Paginator';


let Users = (props) => {
    let users = props.users.map(
        (user) => <User key={user.id} name={user.name} location={"user.location"} userId={user.id}
        photo={user.photos.small} status={user.status} followed={user.followed} follow={props.follow}
        unfollow={props.unfollow} followingUsers= {props.followingUsers}/>);

    return (
        
        <div className={classes.usersPage}>
                <Paginator term ={props.term} itemsTotalCount={props.usersTotalCount} itemsOnPage={props.pageSize} 
                onPageSelectCallback={props.onPageChanged} buttonsCount={props.paginationButtonsCount} page={props.currentPage}/>  
                {(props.isFetching || props.users.length === 0) ? <Preloader /> :          
                <div className={classes.users}>
                    <h1>Users found: {!props.isFetching && props.usersTotalCount}</h1>
                    {users}
                </div>}
                
            {/* <div className={classes.showMore}><button className={classes.showMoreButton} onClick={() => {props.showMoreUsers(props.pageSize)}}>Show more</button></div>} */}
        </div>
    )
}

export default Users;