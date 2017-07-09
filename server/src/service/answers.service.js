/**
 * Created by Asaf.Shochet on 7/9/2017.
 */
import dbConnector from '../dal/db.connector';
import scriptRunnerService from '../service/script.runner.service';
import questionService from '../service/questions.service';

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

		// get data regarding the question to test
		let questionId = answer.questionId;
		let question = questionService.getQuestion(questionId);
		console.log("question", JSON.stringify(question));

		// generate Id
		let randId = this.uuidv4();
		// read file content
		this.readFile(file)
			.then((fileContent) => this.parseFileContentIntoAnswer(fileContent, question))
			.then((answerAnalysis) => {

				let answerToSave = {
					studentId: answer.studentId,
					fullText: answerAnalysis.fileContent,
					checkingResults: answerAnalysis.checkingResults,
					stylingResult: answerAnalysis.stylingResult,
					copiedFromResult: answerAnalysis.copiedFromResult
				};

				answerToSave.id = randId;
				dbConnector.saveAnswer(answerToSave);

			})
			.catch((error) => {
				console.error("something went wrong...", error);
			});

		return randId;
	}

	readFile(file) {
		return new Promise((resolve, reject) => {
			let text = 'function run(input1, input2, input3) { return input1+input2+input3;};';
			console.log('read text from file: ' + text);
			resolve(text);
		});
	}

	checkCopiedFrom(fileContent, questionId) {
		return new Promise((resolve, reject) => {
			let copiedFromResult = {
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
			};
			resolve(copiedFromResult);
		});
	}

	checkStyle(fileContent, styleRules) {
		return new Promise((resolve, reject) => {
			// running eslint here
			let styleReport = {
				'commentsPerLine': {
					status: 'pass'
				},
				'meaningfullNames': {
					status: "failed",
					text: 'It is a bad practice to use variables named x1, x2, x3'
				}
			};
			resolve(styleReport);
		});
	}

	uuidv4() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	}

	parseFileContentIntoAnswer(fileContent, question) {
		let answerAnalysis = {};
		console.log(fileContent);
		answerAnalysis.fileContent = fileContent;
		return new Promise((resolve, reject) => {
			scriptRunnerService.run(question.testCases, fileContent)
				.then((testCaseResult) => answerAnalysis.testCaseResult = testCaseResult)
				.then(() => this.checkStyle(question.styleRules, fileContent))
				.then((styleResults) => answerAnalysis.styleResults = styleResults)
				.then(() => this.checkCopiedFrom(question.sourcesToCheck, fileContent))
				.then((copiedFromResult) => answerAnalysis.copiedFromResult = copiedFromResult)
				.then(() => resolve(answerAnalysis))
				.catch((err) => {
					console.error("error on result analysis!!", err);
				});
		})
	}
}

module.exports = new AnswersService();