function createThunkMiddleware(extrArugment){
    return ({ dispatch, getState }) => next => action => {
        if(typeof action === 'function'){
            return action(dispatch, getState, extrArugment);
        }
        return next(action)
    }
}

const thunk = createThunkMiddleware()
thunk.withExtrArgument = createThunkMiddleware

export default thunk