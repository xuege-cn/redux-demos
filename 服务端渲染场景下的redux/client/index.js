import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { getResource } from './reducer'

const store = createStore(getResource, window.__PRELOADED_STATE__)

ReactDom.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'))