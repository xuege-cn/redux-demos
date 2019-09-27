import React from 'react';
import { connect } from 'react-redux';
// 第一种情况，bindActionCreators单个函数
import { addCreator } from './action'

// 第二种情况，bindActionCreators一个对象
import * as actions from './action'

import { bindActionCreators } from 'redux'
import { myBindActionCreators } from './bindActionCreators'

class App extends React.Component {
  constructor(props){
    super(props)
    let { dispatch } = this.props;

    // 第一种情况，bindActionCreators单个函数
    this.addCreatorWithDispatch = bindActionCreators(addCreator, dispatch)
    // 第二种情况，bindActionCreators一个对象
    this.actionsWithDispatch = bindActionCreators(actions, dispatch)

    // 自定义bindActionCreators，模拟第一种情况funciton
    this.addCreatorWithDispatch1 = myBindActionCreators(addCreator, dispatch)
    // 自定义bindActionCreators，模拟第二种情况object
    this.actionsWithDispatch1 = myBindActionCreators(actions, dispatch)
  }

  add = () => {
    // 第一种情况，bindActionCreators单个函数
    this.addCreatorWithDispatch(1)
    // 第二种情况，bindActionCreators一个对象
    this.actionsWithDispatch.addCreator(1)


    // 自定义bindActionCreators，模拟第一种情况funciton
    this.addCreatorWithDispatch1(1)
    // 自定义bindActionCreators，模拟第二种情况object
    this.actionsWithDispatch1.addCreator(1)
  }

  render(){
    return <React.Fragment>
      <div>{this.props.count}</div>
      <button onClick={this.add} style={{padding: '10px 20px', background: '#006BB4', color: '#fff', borderRadius: '4px'}}>加加加</button>
    </React.Fragment>
  }
}

export default connect(state => {
  return {
    count: state.count
  }
})(App);
