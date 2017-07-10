import React, {Component} from 'react';
import restService from './services/rest-service';

class LearnerApp extends Component {

	constructor(props) {
		super(props);
		this.state = {
			question: {},
			answerStatus: null,
			file: '',
			listResultListToView: []
		};
		this.handleFileUpload = this.handleFileUpload.bind(this);
	}

	componentWillMount() {
		restService.getFirstQuestion()
			.then((question) => {
				this.setState({question: question});
			})
			.catch(err=>console.log('error', err));
	}

	render() {
		const {question, answerStatus} = this.state;
		if (Object.keys(question).length === 0) {
			return null;
		}
		const {title, instructions} = question;

		return (
			<div className="learnerApp">
				<h3 className="row">Your task</h3>
				{this.renderTitle(title)}
				{this.renderDescriptionArea(instructions)}
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


	handleFileUpload(e) {
		console.log("handleFileUpload", e);
		e.preventDefault();

		let reader = new FileReader();
		let file = e.target.files[0];
		console.log("handleFileUpload", e);

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
			<div>
				<h3 className="row">Upload assignment</h3>
				<div className="row">
					<input type="file" className="btn-primary btn" onChange={this.handleFileUpload}/>
				</div>
			</div>
		);
	}

	renderResultsArea(answerStatus) {
		if (!answerStatus) {
			return;
		}
		const {testCaseResult, styleResults, sourceCheckResult} = answerStatus;

		let score = 0;
		for (const index in testCaseResult) {
			score += parseInt(testCaseResult[index].score, 10);
		}


		return (
			<div className="results">
				<h3 className="row">Results</h3>
				<div className="totalScore">{score}</div>
				{this.renderTestCasesView(testCaseResult)}
				{this.renderLintView(styleResults)}
				{this.renderSourceCheckResult(sourceCheckResult)}
			</div>
		)
	}

	renderTestCasesView(testCaseResults) {
		let results = testCaseResults.map(result => {
			let className = result.passed ? "row-success" : "row-error";
			return (<tr className={className}>
					<td>{result.comment}</td>
					<td>{result.passed ? "Pass" : "Failed"}</td>
					<td>{result.score}</td>
				</tr>
			)
		});
		return (
			<div className="lint">
				<h3 className="row">Test cases</h3>
				<table className="table table-striped">
					<thead>
					<th>Name</th>
					<th>Status</th>
					<th>Score</th>
					</thead>
					<tbody>
					{results}
					</tbody>
				</table>
			</div>
		);
	}

	renderLintView(lintResults) {
		let results = lintResults.map(result => {
			let className = result.value ? "row-success" : "row-error";
			return (<tr className={className}>
					<td>{result.name}</td>
					<td>{result.value ? "Pass" : "Failed"}</td>
				</tr>
			)
		});
		return (
			<div className="lint">
				<h3 className="row">Code style analysis</h3>
				<table className="table table-striped">
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
			let className = result.value ? "row-success" : "row-error";
			return (<tr className={"sourceCheckTable "+className}>
				<td>{result.name}</td>
				<td>{result.value ? "Pass" : "Failed"}</td>
				<td>{result.message}</td>
			</tr>)
		});
		return (
			<div className="lint">
				<h3 className="row">Source code traces</h3>
				<table className="table table-striped">
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
