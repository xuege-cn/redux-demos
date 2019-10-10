export const myBindActionCreators = (target, dispatch) => {
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
                            dispatch(target[prop].apply(this, args))
                        }
                    }
                }
            }
            return _target
        default:
            throw new Error('myBindActionCreators arguments type error!')
    }
}