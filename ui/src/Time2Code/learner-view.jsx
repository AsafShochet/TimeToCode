import React, {Component} from 'react';
import restService from './services/rest-service';

class LearnerApp extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title: "sorting algorithms",
			file: ''
		}
	}

	onSubmitClick({title, description, testCases, lintSettings, copyFromCheck}) {
		return restService.setNewQuestion({title, description, testCases, lintSettings, copyFromCheck});
	};

	render() {
		const {title} = this.state;
		const {description} = this.state;
		const {answerStatus} = this.state;
		return (
			<div className="learnerApp container">
				<img src="../img/toolbar-mock.jpeg"/>
				<br />
				<br />
				{this.renderTitle(title)}
				{this.renderDescriptionArea(description)}
				{this.renderUploadButton()}
				{this.renderResultsArea(answerStatus)}

			</div>
		);
	}

	renderTitle(title) {
		return (
			<div className="row">
				<label className="col-md-2">Title: </label>
				<input
					className="col-md-9"
					value={title}
					readonly="true"
				/>
			</div>
		)
	}


	renderDescriptionArea(description) {
		return (
			<div className="row">
				<label className="col-md-2">Description: </label>
				<textarea
					className="col-md-9"
					rows="6"
					value={description}
				/>
			</div>
		);
	};


	_handleImageChange(e) {
		console.log("_handleImageChange", e);
		e.preventDefault();

		let reader = new FileReader();
		let file = e.target.files[0];
		console.log("_handleImageChange", e);

		restService.uploadImage(file)
			.then((response) => {
				console.log("uploadImage response OK", response);
				this.setState({answerStatus: response})
			})
			.catch((err) => {
				console.error("uploadImage error OK", err);
			});
	}

	renderUploadButton() {
		return (
			<div className="row">
				<input type="file" className="btn-primary btn" value="Upload" onChange={this._handleImageChange}/>
			</div>
		);
	}

	renderResultsArea(answerStatus) {
		if (!answerStatus) {
			return;
		}
		let styleResults = answerStatus.styleReport;
		let testCaseResult = answerStatus.testCaseResult;
		let sourceCheckResult = answerStatus.sourceCheckResult;

		return (
			<div className="results"> Results
				<div className="totalScore">85</div>
				<div className="testCases">
					{this.renderTestCasesView(testCaseResult)}
				</div>
				{this.renderLintView(styleResults)}
				{this.renderSourceCheckResult(sourceCheckResult)}
			</div>
		)
	}

	renderTestCasesView() {
		return null;
	}

	renderLintView(lintResults) {
		let results = lintResults.map(result => {
			let className = result.value ? "table-success" : "table-danger";
			return (<tr className={className}>
				<td>{result.name}</td>
				<td>{result.value ? "Pass" : "Failed"}</td>
			</tr>)
		});
		return (
			<div className="lint">
				<table className="table table-bordered">
					<thead>
					<th>Category</th>
					<th>Result</th>
					</thead>
					<tbody>
					{results}
					</tbody>
				</table>
			</div>
		);
	}

	renderSourceCheckResult(sourceCheckResult) {
		let results = sourceCheckResult.map(result => {
			let className = result.value ? "table-success" : "table-danger";
			return (<tr className={"sourceCheckTable "+className}>
				<td>{result.name}</td>
				<td>{result.value ? "Pass" : "Failed"}</td>
				<td>{result.comment}</td>
			</tr>)
		});
		return (
			<div className="lint">
				<table className="table table-bordered">
					<thead>
					<th>Source</th>
					<th>Result</th>
					<th>Comment</th>
					</thead>
					<tbody>
					{results}
					</tbody>
				</table>
			</div>
		);
	}
}

export default LearnerApp;
