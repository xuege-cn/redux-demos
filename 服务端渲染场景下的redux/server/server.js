import 'babel-polyfill'
import Koa from 'koa'
import koaNunjucks from 'koa-nunjucks-2'
import Router from 'koa-router'
import path from 'path'
import koaStatic from 'koa-static'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../client/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { getResource } from '../client/reducer'

const app = new Koa()
const router = new Router()

app.use(koaNunjucks({
    ext: 'html',
    path: path.resolve('dist'),
    nunjucksConfig: {
        trimBlocks: true,
        autoescape: false
    }
}));

const store = createStore(getResource)
store.dispatch({
    type: 'init',
    data: [{name: '张三', age: '29'}, {name: '李四', age: '49'}]
})


const context = {};
router.get('/*', async(ctx, next) => {
    let url = ctx.req.url
    if(~url.indexOf('.')){
        return await next()
    }

    const markup = ReactDOMServer.renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    );

    const state = store.getState()

    ctx.render('index', {
        pageTitle: '服务端渲染redux',
        content: markup,
        state: JSON.stringify(state)
    })

    // 不能用await next，会导致nunjucks变量渲染不了
    // await next()
})
app.use(router.routes())

app.use(koaStatic(path.resolve('dist')), {
    extensions: ['js']
})

app.listen(3000, () => {
    console.log('服务器已启动！请打开浏览器输入localhost:3000进行访问')
})