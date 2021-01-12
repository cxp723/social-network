import usersReducer, { InitialStateType, usersActions} from './users-reducer'

let oldState: InitialStateType
beforeEach(() => {
    oldState = {
        users: [
            { id: 0, name: 'Alex', followed: false, photos: { small: null, large: null }, status: 'status 0' },
            { id: 1, name: 'Bob', followed: false, photos: { small: null, large: null }, status: 'status 1' },
            { id: 2, name: 'Kate', followed: true, photos: { small: null, large: null }, status: 'status 2' },
            { id: 3, name: 'Mike', followed: true, photos: { small: null, large: null }, status: 'status 3' }
        ],
        friends: [],
        usersTotalCount: 0,
        currentPage: 1,
        pageSize: 100,
        term: null,
        paginationButtonsCount: 3,
        isFetching: false,
        followingUsers: []
    }
})

test('term sets successfully', () => {
    const setTermAction = usersActions.setTerm('term')
    let newState = usersReducer(oldState, setTermAction)
    expect(newState.term).toBe('term')
})

test('following and unfollowing successfully', () => {
    const followAction = usersActions.followSuccess(1)
    const unfollowAction = usersActions.unfollowSuccess(3)
    let newState = usersReducer(usersReducer(oldState, followAction), unfollowAction)
    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[1].followed).toBeTruthy();
    expect(newState.users[2].followed).toBeTruthy();
    expect(newState.users[3].followed).toBeFalsy();

})