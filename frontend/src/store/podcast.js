import { csrfFetch } from './csrf'

const ALL_PODS = 'podcast/ALL_PODS'
const CREATE_POD = 'podcast/CREATE_POD'
const DELETE_POD = 'podcast/DELETE_POD'


const allPods = list => ({
    type: ALL_PODS,
    list
})

const createPod = (podcast) => ({
    type: CREATE_POD,
    podcast
})

const deletePod = (podcastId) => ({
    type: DELETE_POD,
    podcastId
})


export const getAllPodcasts = () => async dispatch => {
    const res = await fetch('/api/podcasts')
    const list = await res.json()
    dispatch(allPods(list))
    return res
}

export const createPodcast = (payload) => async dispatch => {
    const res = await csrfFetch('/api/podcasts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    const newPodcast = await res.json()
    dispatch(createPod(newPodcast))
    return newPodcast
}

export const editPodcast = (payload, podcastId) => async dispatch => {
    const res = await csrfFetch(`/api/podcasts/${podcastId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    const podcast = await res.json()
    dispatch(createPod(podcast))
    return podcast
}

export const deletePodcast = (podcastId) => async dispatch => {
    const res = await csrfFetch(`/api/podcasts/${podcastId}`, {
        method: 'DELETE',
    })
    const podcast = await res.json()
    dispatch(deletePod(podcast?.id))
}


const podcastReducer = (state = {}, action) => {
    let newState
    switch (action.type) {
        case ALL_PODS:
            newState = {
                ...state,
                ...action.list
            }
            return newState
        case CREATE_POD:
            if (!state[action.podcast.id]) {
                newState = {
                    ...state,
                    [action.podcast.id]: action.podcast
                }
                return newState
            }
            return {
                ...state,
                [action.podcast.id]: {
                    ...action.podcast
                }
            }
        case DELETE_POD:
            newState = { ...state }
            delete newState[action.podcastId]
            return newState
        default:
            return state
    }
}




export default podcastReducer
