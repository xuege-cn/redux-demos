import { createStore, applyMiddleware } from 'redux'
import { counter } from './reducer'
import thunk from 'redux-thunk'

const initState = {
    count: 0
}

export const store = createStore(counter, initState, applyMiddleware(thunk));