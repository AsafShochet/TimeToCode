import React from 'react';
import RestService from './services/rest-service';
import TestCase from './test-case';

class InstructorApp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title: '123',
			description: '4567',
			testCaseList: [],
			lintSettings: {},
			copyFromCheck: true
		};

		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
	}

	onSubmitClick() {
		const {title, description, testCaseList, lintSettings, copyFromCheck} = this.state;
		return RestService.setNewQuestion({ title, description, testCases:testCaseList, lintSettings, copyFromCheck });
	};

	render() {
		return (
			<div className="instructorApp">
				{this.renderTitle()}
				{this.renderDescriptionArea()}
				<TestCase
					testCaseList={this.state.testCaseList}
				/>
				<button onClick={() => this.onSubmitClick()}>ClickMe</button>
			</div>
		);
	};

	renderTitle() {
		const { title } = this.state;
		return (
			<div className="row">
				<label className="col-md-4">Title: </label>
				<input
					className="col-md-8"
					value={title}
					onChange={this.handleTitleChange}
				/>
			</div>
		)
	};

	renderDescriptionArea() {
		const { description } = this.state;
		return (
			<div className="row">
				<label className="col-md-4">Description: </label>
				<textarea
					className="col-md-8"
					rows="6"
					value={description}
					onChange={this.handleDescriptionChange}
				/>
			</div>
		);
	};

	handleTitleChange(e) {
		const title = e.target.value;
		this.setState({ title });
	}

	handleDescriptionChange(e) {
		const description = e.target.value;
		this.setState({ description });
	}
}

export default InstructorApp;
