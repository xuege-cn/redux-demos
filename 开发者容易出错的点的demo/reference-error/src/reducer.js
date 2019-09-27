import { ADD } from './action'

export const counter = (state = {}, action) => {
    switch(action.type){
        case ADD:
            // 引用BUG的反面教材
            // state.count += action.count
            // return state

            // 引用BUG的正面教材
            return {
                ...state,
                count: state.count + action.count
            }
        default:
            return state
    }
}