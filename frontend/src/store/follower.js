import { csrfFetch } from './csrf'

const ALL_FOLLOWERS = 'follower/ALL_FOLLOWERS'
const ADD_FOLLOWER = 'follower/ADD_FOLLOWER'

const allFollowers = (list) => ({
    type: ALL_FOLLOWERS,
    list
})

const addOneFollower = (follower) => ({
    type: ADD_FOLLOWER,
    follower
})

export const getAllFollowers = () => async dispatch => {
    const res = await fetch('/api/followers')
    const list = await res.json()
    dispatch(allFollowers(list))
    return res
}

export const addFollower = (userId, podcastId) => async dispatch => {
    const res = await csrfFetch('/api/followers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, podcastId })
    })
    const follower = await res.json()
    dispatch(addOneFollower(follower))
    return follower
}

const followerReducer = (state = {}, action) => {
    let newState
    switch (action.type) {
        case ALL_FOLLOWERS:
            newState = {
                ...state,
                ...action.list
            }
            return newState
        case ADD_FOLLOWER:
            newState = { ...state }
            newState.allFollowers = [...state.allFollowers, action.follower]
            return newState
        default:
            return state
    }
}

export default followerReducer
