#### 应用场景：

##### 应用场景1: 屏蔽redux
可以把dispatch绑定到fn，比较方便，类似redux-thunk的功能，但是实现不一样，bindActionCreators依赖的是function的apply功能

##### 应用场景2：直接调用action，免去手动dispatch
-> redux有个排错：就是调用了action，但是没有调用dispatch而导致state没有更新的bug
—> 场景
import { addCreator } from 'actions'

<!-- 直接调用action，只是生成一个{ type: 'ADD', count: 1 }的json，并没有产生任何结果 -->
addCreator(1)

<!-- 如果想要产生结果，需要dispatch -->
this.props.dispatch(addCreator(1))



#### 用法：

##### 第一种场景，target为函数
import { addCreator } from './action'
import { bindActionCreators } from 'redux'

let addCreatorWithDispatch = bindActionCreators(addCreators, this.props.dispatch)
addCreatorWithDispatch(1)

##### 第二种场景，target为对象
import * as actions from './action'
import { bindActionCreators } from 'redux'

let actionsWithDispatch = bindActionCreators(actions, this.props.dispatch)
actionsWithDispatch.addCreator(1)

#### 自己实现一个bindActionCreators

export const bindActionCreators = (target, dispatch) => {
    switch(typeof target){
        case 'function':
            return (...args) => {
                dispatch(target.apply(this, args))
            }
        case 'object':
            let _target = {};
            for(let prop in target){
                if(target.hasOwnProperty(prop)){
                    if(typeof target[prop] == 'function'){
                        _target[prop] = (...args) => {
                            dispatch(target.apply(this, args))
                        }
                    }
                }
            }
            return _target
    }
}