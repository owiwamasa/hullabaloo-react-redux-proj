const ALL_PODS = 'podcast/ALL_PODS'


const allPods = list => ({
    type: ALL_PODS,
    list
})


export const getAllPodcasts = () => async dispatch => {
    const res = await fetch('/api/podcasts')
    const list = await res.json()
    dispatch(allPods(list))
    return res
}

// export const getOnePodcast = (podcastId) => async dispatch => {
//     const res = await fetch(`/api/podcasts/${podcastId}`)
//     const podcast = await res.json()
//     dispatch(getPod(podcast))
//     return res
// }

const podcastReducer = (state = {}, action) => {
    let newState
    switch (action.type) {
        case ALL_PODS:
            newState = {
                ...state,
                ...action.list
            }
            return newState
        default:
            return state
    }
}




export default podcastReducer
