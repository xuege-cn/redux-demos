export const getResource = (state = {}, action) => {
    switch(action.type){
        case 'init':
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}