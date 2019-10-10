import { createStore, applyMiddleware } from 'redux'
import { counter } from './reducer'

const initState = {
    count: 0
}

export const store = createStore(counter, initState);