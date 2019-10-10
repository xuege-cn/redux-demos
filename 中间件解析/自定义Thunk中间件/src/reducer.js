import { ADD } from './action'

export const counter = (state = {}, action) => {
    switch(action.type){
        case ADD:
            return {
                ...state,
                count: state.count + action.count
            }
        default:
            return state
    }
}