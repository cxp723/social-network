import { follow, usersActions } from "./users-reducer"
import { followAPI, ResponseType, ResultCodes } from './../api/api';

jest.mock('./../api/api')
const usersAPImock = followAPI as jest.Mocked<typeof followAPI>
const successFollowResponse: ResponseType = {
    resultCode: ResultCodes.Success,
    messages: [],
    data: {}
}
const dispatchMock = jest.fn()
const getStateMock = jest.fn()
beforeEach(() => {
    dispatchMock.mockClear()
    getStateMock.mockClear()
})

test('follow thunk works correctly', async () => {
    const followThunk = follow(1)
    usersAPImock.follow.mockReturnValue(Promise.resolve(successFollowResponse))
    await followThunk(dispatchMock, getStateMock, {})
    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, usersActions.toggleFollowingButton(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, usersActions.followSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, usersActions.toggleFollowingButton(1))
})