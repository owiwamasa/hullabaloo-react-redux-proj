const ALL_EPISODES = 'episodes/ALL_EPISODES'

const allEpisodes = list => ({
    type: ALL_EPISODES,
    list
})


export const getAllEpisodes = () => async dispatch => {
    const res = await fetch('/api/episodes')
    const list = await res.json()
    dispatch(allEpisodes(list))
    return res
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
        default:
            return state
    }
}


export default episodeReducer
