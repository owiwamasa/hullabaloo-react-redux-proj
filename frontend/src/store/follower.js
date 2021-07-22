import { csrfFetch } from './csrf'

const ALL_FOLLOWERS = 'follower/ALL_FOLLOWERS'
const ADD_FOLLOWER = 'follower/ADD_FOLLOWER'
const REMOVE_FOLLOWER = 'follower/REMOVE_FOLLOWER'

const allFollowers = (list) => ({
    type: ALL_FOLLOWERS,
    list
})

const addOneFollower = (follower) => ({
    type: ADD_FOLLOWER,
    follower
})

const removeOneFollower = (followerId) => ({
    type: REMOVE_FOLLOWER,
    followerId
})


export const getAllFollowers = () => async dispatch => {
    const res = await fetch('/api/followers')
    const list = await res.json()
    dispatch(allFollowers(list))
    return res
}

export const addFollower = (payload) => async dispatch => {
    const res = await csrfFetch('/api/followers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    const follower = await res.json()
    dispatch(addOneFollower(follower))
    return follower
}

export const removeFollower = (followerId) => async dispatch => {
    const res = await csrfFetch(`/api/followers/${followerId}`, {
        method: 'DELETE'
    })
    const follower = await res.json()
    dispatch(removeOneFollower(follower?.id))
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
        case REMOVE_FOLLOWER:
            newState = { ...state }
            const newAllFollowers = newState.allFollowers.filter(follower => follower.id !== action.followerId)
            newState.allFollowers = newAllFollowers
            return newState
        default:
            return state
    }
}

export default followerReducer
