import { csrfFetch } from './csrf'

const SET_USER = 'user/SET_USER'
const REMOVE_USER = 'user/REMOVE_USER'

const setUser = (user) => {
    return {
        type: SET_USER,
        user
    }
}

const removeUser = () => {
    return {
        type: REMOVE_USER,
    }
}

export const login = (user) => async dispatch => {
    const { credential, password } = user
    const res = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({ credential, password })
    })
    const data = await res.json()
    dispatch(setUser(data.user))
    return res
}

const initialState = { user: null }

const sessionReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case SET_USER:
            newState = Object.assign({}, state)
            newState.user = action.user
            return newState
        case REMOVE_USER:
            newState = Object.assign({}, state)
            newState.user = null
            return newState
        default:
            return state
    }
}

export default sessionReducer
