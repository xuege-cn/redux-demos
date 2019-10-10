### 服务端渲染的场景下使用redux
用到的主要的几个插件：
import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'

### 同构场景下的redux实现：

#### 服务端：
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from '../client/reducer'

const store = createStore(reducer)
store.dispatch({
  type: 'init',
  data: [{name: '张三', age: '29'}, {name: '李四', age: '49'}]
})
const content = ReactServerDom.renderToString(<Provider store={store}>
  <App />
</Provider>)

ctx.render('index', {
  pageTitle: '服务端渲染redux',
  content: content,
  state: JSON.stringify(store.getState()) 
})

#### 客户端
##### nunjucks把初始化state注入到模版
<html>
  <head>
    <title>{{pageTitle}}</title>
    <script>__PRELOADED_STATE__ = {{state}}</script>
  </head>
  <body>
    {{content}}    
  </body>
</html>

初始化state注入完成之后，就是客户端自己的redux初始化过程了：
import { createStore } from 'redux'
import { Provider } from 'react-redux' 
import { reducer } from './reducer'

const store = createStore(reducer, window.__PRELOADED_STATE__)
<Provider store={store}>
  <App />
</Provider>

App中使用redux
import { connect } from 'react-redux' 

function App(props){
  return props.data
}

export default connect(state => {
  return {
    data: state.data
  }
})(App)