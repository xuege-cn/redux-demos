import React from 'react';
import { connect } from 'react-redux';
import { addCreatorWithReduxThunk } from './action'

class App extends React.Component {
  constructor(props){
    super(props)
  }

  add = () => {
    let { dispatch } = this.props;
    dispatch(addCreatorWithReduxThunk(1))
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
