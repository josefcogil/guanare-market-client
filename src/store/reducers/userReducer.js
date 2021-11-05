import * as actions from '../action-types'

const reducer = (state = {}, action) => {
    switch (action.type) {
        case actions.ADD_USER:
            return state = action.payload

        default: return state
    }
}

export default reducer