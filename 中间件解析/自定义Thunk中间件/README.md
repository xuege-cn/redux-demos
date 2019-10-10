### 应用场景：

#### 如何自定义一个redux-thunk：

##### 规范 
redux的中间件的自定义规范是：

中间件是一个【 函数 】

函数的要求: store => next => action => { return next(action) }

##### 反思redux-thunk的作用
原始的actionCreator都是返回一个json

redux-thunk的作用是：可以定义一个返回函数 dispatch => dispatch(actionCreator)的action


所以可以总结出redux-thunk的实现：

function createThunkWithArgument(extrArgument){
    return ({dispatch, getState}) => next => action => {
        if(action === 'function'){
            return action(dispatch, getState, extrArgument)
        }
        return next(action)
    }
}

const thunk = createThunkWithArgument()
thunk.withExtrArgument = createThunkWithArgument

export default thunk


##### 从这个实现可以看出来：withExtrArgument可以带上多余参数