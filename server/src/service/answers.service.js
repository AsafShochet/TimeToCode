/**
 * Created by Asaf.Shochet on 7/9/2017.
 */
import dbConnector from '../dal/db.connector';
import scriptRunnerService from '../service/script.runner.service';
import questionService from '../service/questions.service';
import lintService from '../service/lint.service';
import sourceCheckingService from '../service/source.checking.service';

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
			.then((fileContent) => this.checkAnswerBasedOnFileContent(fileContent, question))
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

	uuidv4() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	}

	checkAnswerBasedOnFileContent(fileContent, question) {
		let answerAnalysis = {};
		console.log(fileContent);
		answerAnalysis.fileContent = fileContent;
		return new Promise((resolve, reject) => {
			scriptRunnerService.run(question.testCases, fileContent)
				.then((testCaseResult) => answerAnalysis.testCaseResult = testCaseResult)
				.then(() => lintService.runLint(fileContent, question.styleRules))
				.then((styleResults) => answerAnalysis.styleResults = styleResults)
				.then(() => sourceCheckingService.runSourceCheck(fileContent, question.sourcesToCheck))
				.then((copiedFromResult) => answerAnalysis.copiedFromResult = copiedFromResult)
				.then(() => resolve(answerAnalysis))
				.catch((err) => {
					console.error("error on result analysis!!", err);
				});
		})
	}
}

module.exports = new AnswersService();