// 单纯的action
export const ADD = 'ADD'

// action creator
export const addCreator = count => {
    return {
        type: ADD,
        count: count
    }
}

// action creator with dispatch
export const addCreatorWithDispatch = count => dispatch => dispatch(addCreator(count))