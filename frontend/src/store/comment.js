import { csrfFetch } from './csrf'

const ALL_COMMENTS = 'comment/ALL_COMMENTS'
const CREATE_COMMENT = 'comment/CREATE_COMMENT'
const DELETE_COMMENT = 'comment/DELETE_COMMENT'

const allComments = list => ({
    type: ALL_COMMENTS,
    list
})

const createOneComment = (comment) => ({
    type: CREATE_COMMENT,
    comment
})

const deleteOneComment = (commentId) => ({
    type: DELETE_COMMENT,
    commentId
})


export const getAllComments = () => async dispatch => {
    const res = await fetch('/api/comments')
    const list = await res.json()
    dispatch(allComments(list))
    return res
}

export const createComment = (payload) => async dispatch => {
    const res = await csrfFetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    const newComment = await res.json()
    dispatch(createOneComment(newComment))
    return newComment
}

export const deleteComment = (commentId) => async dispatch => {
    const res = await csrfFetch(`/api/comments/${commentId}`, {
        method: 'DELETE'
    })
    const comment = await res.json()
    dispatch(deleteOneComment(comment?.id))
}


const commentReducer = (state = {}, action) => {
    let newState
    switch (action.type) {
        case ALL_COMMENTS:
            newState = {
                ...state,
                ...action.list
            }
            return newState
        case CREATE_COMMENT:
            newState = { ...state }
            newState.allComments = [...state.allComments, action.comment]
            return newState
        case DELETE_COMMENT:
            newState = { ...state }
            const newAllComments = newState.allComments.filter(comment => comment.id !== action.commentId)
            newState.allComments = newAllComments
            return newState
        default:
            return state
    }
}



export default commentReducer
