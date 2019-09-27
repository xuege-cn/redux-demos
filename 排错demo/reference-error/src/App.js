import React from 'react';
import { connect } from 'react-redux';
import { addCreator, addCreatorWithDispatch } from './action'

class App extends React.Component {
  add = () => {
    // action creator调用的反面教材
    // addCreator(1)

    // action creator调用的正面教材1
    // this.props.dispatch(addCreator(1))

    // action creator调用的正面教材2，结合redux-thunk，需要在store.js里面加下redux-thunk middleware
    this.props.dispatch(addCreatorWithDispatch(1))
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
