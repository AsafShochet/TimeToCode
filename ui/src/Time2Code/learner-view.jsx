import React, { Component } from 'react';
import RestService from './services/rest-service';

class LearnerApp extends Component{

	onSubmitClick({title, description, testCases, lintSettings, copyFromCheck}) {
		return RestService.setNewQuestion({ title, description, testCases, lintSettings, copyFromCheck });
	};

	render() {
		return (
			<div className="learnerApp">
				<h1>INs Yo</h1>
				<button onClick={() => this.onSubmitClick({title:'WOW'})}>ClickMe</button>
			</div>
		);
	}
}

export default LearnerApp;
