import React from 'react';
import Dashboard from './router/dashboard'
import Home from './router/home/index'
import { connect } from 'react-redux'

function App(props) {
	return (
		<React.Fragment>
			<div style={{ width: 200, float: 'left', listStyle: 'none' }}>
				<h3>菜单</h3>
				<ul style={{ listStyle: 'none' }}>
					<li>
						<a to="/dashboard">dashboard</a>
					</li>
					<li>
						<a to="/home">home</a>
					</li>
				</ul>
			</div>
			<div style={{ paddingLeft: 200 }}>
				<Dashboard />
				{JSON.stringify(props.data)}
			</div>
		</React.Fragment>
	);
}

export default connect(state => {
	return {
		data: state.data
	}
})(App);
