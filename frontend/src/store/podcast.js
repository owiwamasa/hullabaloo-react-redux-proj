import { csrfFetch } from './csrf'

const GET_POD = 'podcast/GET_POD'

const LOAD = 'podcast/LOAD'


const load = list => ({
    type: LOAD,
    list
})

const getPod = (podcast) => {
    return {
        type: GET_POD,
        podcast
    }
}


export const getAllPodcasts = () => async dispatch => {
    const res = await fetch('/api/podcasts')
    const list = await res.json()
    dispatch(load(list))
    return res
}

export const getOnePodcast = (podcastId) => async dispatch => {
    const res = await fetch(`/api/podcasts/${podcastId}`)
    const podcast = await res.json()
    dispatch(getPod(podcast))
    return res
}


const podcastReducer = (state = {}, action) => {
    let newState
    switch (action.type) {
        case GET_POD:
            newState = { ...state }
            newState[action.podcast.podcast.id] = action.podcast
            return newState
        default:
            return state
    }
}

export default podcastReducer
