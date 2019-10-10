import { createStore, applyMiddleware } from 'redux'
import { counter } from './reducer'
import myMiddleware from './myMiddleware'

const initState = {
    count: 0
}

export const store = createStore(counter, initState, applyMiddleware(myMiddleware));