// 单纯的action
export const ADD = 'ADD'

// action creator
export const addCreator = count => {
    return {
        type: ADD,
        count: count
    }
}