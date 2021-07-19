const ALL_USERS = 'users/ALL_USERS'

const allUsers = list => ({
    type: ALL_USERS,
    list
})

export const getAllUsers = () => async dispatch => {
    const res = await fetch('/api/users')
    const list = await res.json()
    dispatch(allUsers(list))
    return res
}

const userReducer = (state = {}, action) => {
    let newState
    switch (action.type) {
        case ALL_USERS:
            newState = {
                ...state,
                ...action.list
            }
            return newState
        default:
            return state
    }
}




export default userReducer
