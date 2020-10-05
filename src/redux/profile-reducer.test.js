import profileReducer, { addPost, deletePost } from './profile-reducer';

let oldState = {
    profile: null,
    status: '',
    posts:
        [{ message: "Hi, how are you?", id: 1, likesCount: 16 },
        { message: "It's my first post", id: 2, likesCount: 15 }],
    fetching: false
}

test ('new post should be added', () => {
    let action = addPost ('newPost');
    let newState = profileReducer (oldState, action);
    expect(newState.posts.length).toBe(3);
})

test ('new post text should be correct', () => {
    let action = addPost ('newPost');
    let newState = profileReducer (oldState, action);
    expect(newState.posts[2].message).toBe('newPost');
})

test ('post should be deleted', () => {
    let action = deletePost (2);
    let newState = profileReducer (oldState, action);
    expect(newState.posts.length).toBe(1);
})
test ('post shouldn\'t be deleted', () => {
    let action = deletePost (1000);
    let newState = profileReducer (oldState, action);
    expect(newState.posts.length).toBe(2);
})