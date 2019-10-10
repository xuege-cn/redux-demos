#### 应用场景：

##### redux-thunk的使用：

store的改造；
import thunk from 'redux-thunk'
createStore(reducer, initState, applyMiddleware(thunk))

action的改造：返回funciton
export const addCountWithThunk = count => dispatch => dispatch(addCount(count))

业务代码中应用地方的改造：
dispatch(addCountWithThunk(1))