import React from 'react';

class TestCase extends React.Component {

	constructor(props) {
		super(props);

		this.addTestCase = this.addTestCase.bind(this);
		this.updateTestCaseField = this.updateTestCaseField.bind(this);
		this.updateTestCaseArgument = this.updateTestCaseArgument.bind(this);
		this.addTestCaseArgument = this.addTestCaseArgument.bind(this);
		this.removeTestCaseArgument = this.removeTestCaseArgument.bind(this);
	}

	render() {
		return (
			<div className="tests-case-area row">
				<h3>Test cases</h3>
				{this.renderTestCasesTable()}
				{this.renderAddTestCase()}
			</div>
		);
	};

	renderTestCasesTable() {
		const { testCaseList } = this.props;
		return (
			<table className="table table-striped">
				<thead>
				<tr>
					<th>#</th>
					<th>Arguments</th>
					<th>Expected Output</th>
					<th>Score</th>
					<th>Comments</th>
					<th></th>
				</tr>
				</thead>
				<tbody>
				{testCaseList.map((testCase, index) => (
					<tr>
						<th scope="row">{index + 1}</th>
						<td>{this.renderTestCaseArguments(testCase)}</td>
						<td>
							<input
								value={testCase.expectedOutput}
								onChange={e => this.updateTestCaseField(testCase, e.target.value, 'expectedOutput')}
							/>
						</td>
						<td>
							<input
								type="number"
								style={{maxWidth: '55px'}}
								value={testCase.score}
								onChange={e => this.updateTestCaseField(testCase, e.target.value, 'score')}
							/>
						</td>
						<td>
							<input
								value={testCase.comment}
								onChange={e => this.updateTestCaseField(testCase, e.target.value, 'comment')}
							/>
						</td>
						<td>
							<button
								className="btn btn-link"
								onClick={() => this.removeTestCase(index)}
							>
								Remove test
							</button>
						</td>
					</tr>
				))}
				</tbody>
			</table>
		);
	}

	renderAddTestCase() {
		return (
			<button
				className='add-test-case btn btn-primary'
				onClick={() => this.addTestCase()}>
				&#43; Add test
			</button>
		)
	}

	renderTestCaseArguments(testCase) {
		return (
			<div className="test-case-arguments no-padding">
				{testCase.arguments.map((arg, index) => (
					<div className="test-case-argument no-padding">
						<input value={arg}
						       onChange={e => this.updateTestCaseArgument(testCase, index, e.target.value)}
						/>
						{this.renderRemoveArgumentButton(testCase, index)}
					</div>
				))}
				<button
					className='add-test-case-argument btn btn-link'
					onClick={() => this.addTestCaseArgument(testCase)}>
					&#43; New argument
				</button>
			</div>
		)
	}

	renderRemoveArgumentButton(testCase, index) {
		if (testCase.arguments.length < 2) {
			return null;
		}
		return (
			<button
				className="btn btn-link"
				onClick={()=>this.removeTestCaseArgument(testCase, index)}
			>

				Remove
			</button>
		)
	}

	addTestCase() {
		const newTestCase = {
			title: '',
			arguments: [''],
			expectedOutput: '',
			score: 0,
			comment: ''
		};
		const testCaseList = this.props.testCaseList;
		testCaseList.push(newTestCase);
		this.setState({ testCaseList });
	}

	removeTestCase(index) {
		const testCaseList = this.props.testCaseList;
		testCaseList.splice(index, 1);
		this.setState({ testCaseList });
	}

	updateTestCaseField(testCase, fieldValue, fieldName) {
		const value = {};
		value[fieldName] = fieldValue;
		Object.assign(testCase, value);
		this.forceUpdate();
	}

	updateTestCaseArgument(testCase, index, fieldValue) {
		testCase.arguments[index] = fieldValue;
		this.forceUpdate();
	}

	addTestCaseArgument(testCase) {
		testCase.arguments.push('');
		this.forceUpdate();
	}

	removeTestCaseArgument(testCase, index) {
		testCase.arguments.splice(index, 1);
		this.forceUpdate();
	}

}

export default TestCase;
