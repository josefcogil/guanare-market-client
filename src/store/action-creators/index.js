import * as actions from '../action-types'

export const addUser = (payload) => {
    return dispatch => {
        dispatch({
            type: actions.ADD_USER,
            payload
        })
    }
}