import React, { Component } from 'react';
import RestService from './services/rest-service';

class LearnerApp extends Component{

	onSubmitClick({title, description, testCases, lintSettings, copyFromCheck}) {
		return RestService.setNewQuestion({ title, description, testCases, lintSettings, copyFromCheck });
	};

	render() {
		return (
			<div className="learnerApp">
				<div className="title">title</div>
				<div className="description">description</div>

				<div className="upload">upload here</div>

				<div className="results">
					<div className="totalScore"></div>
					<div className="testCases"></div>
					<div className="lint"></div>
					<div className="sourceCheck"></div>
				</div>
			</div>
		);
	}
}

export default LearnerApp;
