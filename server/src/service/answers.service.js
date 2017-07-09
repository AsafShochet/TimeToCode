/**
 * Created by Asaf.Shochet on 7/9/2017.
 */
import dbConnector from '../dal/db.connector';
import scriptRunnerService from '../service/script.runner.service';

class AnswersService {

	getAnswers() {
		return dbConnector.getAnswers();
	}

	/**
	 * saves an answer and returns it ID
	 * @param answer
	 * @param file
	 * @returns {*}
	 */
	saveAnswer(answer, file) {
		// read file content
		let fileContent = this.readFile(file);
		let questionId = answer.questionId;
		let testCases = this.getTestCases(questionId);
		console.log("testCases", testCases);
		let checkingResults = scriptRunnerService.run(testCases, fileContent, console.log);
		let stylingResult = this.checkStyle(fileContent, questionId);
		let copiedFromResult = this.checkCopiedFrom(fileContent, questionId);
		let answerToSave = {
			studentId: answer.studentId,
			fullText: fileContent,
			checkingResults: checkingResults,
			stylingResult: stylingResult,
			copiedFromResult: copiedFromResult
		};

		answerToSave.id = this.uuidv4();
		dbConnector.saveAnswer(answerToSave);
		return answerToSave.id;
	}

	readFile(file) {
		return 'function run(input1, input2, input3) { return input1+input2+input3;};';
	}

	checkCopiedFrom(fileContent, questionId) {
		return {
			'google': {
				matches: []
			},
			'internal': {
				matches: [
					{
						studentId: 'id17',
						matchPercentage: 85
					}
				]
			}
		}
	}

	checkStyle(fileContent, questionId) {
		return {
			'commentsPerLine': {
				status: 'pass'
			},
			'meaningfullNames': {
				status: "failed",
				text: 'It is a bad practice to use variables named x1, x2, x3'
			}
		}
	}

	checkAnswer(fileContent, questionId) {
		return {
			'id1': 'correct',
			'id2': 'incorrect'
		};
	}

	uuidv4() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	}

	getTestCases(questionId) {
		return [
			{
				"id": "AAAASS-XASD",
				"input": "[1,2,3]",
				"output": 6
			}
		]
	}
}

module.exports = new AnswersService();