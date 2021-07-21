import { csrfFetch } from './csrf'

const ALL_EPISODES = 'episodes/ALL_EPISODES'
const CREATE_EPISODE = 'episodes/CREATE_EPISODE'
const DELETE_EPISODE = 'episodes/DELETE_EPISODE'
const EDIT_EPISODE = 'episodes/EDIT_EPISODE'

const allEpisodes = list => ({
    type: ALL_EPISODES,
    list
})

const createOneEpisode = (episode) => ({
    type: CREATE_EPISODE,
    episode
})

const deleteOneEpisode = (episodeId) => ({
    type: DELETE_EPISODE,
    episodeId
})

const editOneEpisode = (episode) => ({
    type: EDIT_EPISODE,
    episode
})


export const getAllEpisodes = () => async dispatch => {
    const res = await fetch('/api/episodes')
    const list = await res.json()
    dispatch(allEpisodes(list))
    return res
}

export const createEpisode = (payload) => async dispatch => {
    const res = await csrfFetch('/api/episodes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    const newEpisode = await res.json()
    dispatch(createOneEpisode(newEpisode))
    return newEpisode
}

export const editEpisode = (payload, episodeId) => async dispatch => {
    const res = await csrfFetch(`/api/episodes/${episodeId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    const episode = await res.json()
    dispatch(editOneEpisode(episode))
    return episode
}

export const deleteEpisode = (episodeId) => async dispatch => {
    const res = await csrfFetch(`/api/episodes/${episodeId}`, {
        method: 'DELETE'
    })
    const episode = await res.json()
    dispatch(deleteOneEpisode(episode?.id))
}


const episodeReducer = (state = {}, action) => {
    let newState
    switch (action.type) {
        case ALL_EPISODES:
            newState = {
                ...state,
                ...action.list
            }
            return newState
        case CREATE_EPISODE:
            newState = { ...state }
            newState.allEpisodes = [...state.allEpisodes, action.episode]
            return newState
        case EDIT_EPISODE:
            newState = { ...state };
            newState.allEpisodes.forEach((episode) => {
                if (episode.id === action.episode.episode.id) {
                    episode.title = action.episode.episode.title;
                    episode.description = action.episode.episode.description;
                    episode.imageUrl = action.episode.episode.imageUrl;
                    episode.mp3file = action.episode.episode.mp3file;
                    episode.totalPlays = action.episode.episode.totalPlays;
                }
            });
            return newState;
        case DELETE_EPISODE:
            newState = { ...state }
            const newAllEpisodes = newState.allEpisodes.filter(episode => episode.id !== action.episodeId)
            newState.allEpisodes = newAllEpisodes
            return newState
        default:
            return state
    }
}


export default episodeReducer
