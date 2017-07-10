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
	saveAnswer(fileContent, answer) {

		console.log('fileContent', fileContent);
		console.log('answer object', JSON.stringify(answer));

		// get data regarding the question to test
		let questionId = answer.questionId;
		console.log('questionId', questionId);
		let question = questionService.getQuestion(questionId);
		console.log("question", JSON.stringify(question));

		this.checkAnswerBasedOnFileContent(fileContent, question)
			.then((answerAnalysis) => {

				answerAnalysis.answerId = answer.id;
				answerAnalysis.studentId = answer.studentId;
				
				dbConnector.saveAnswer(answerAnalysis);
			})
			.catch((error) => {
				console.error("something went wrong...", error);
			});

		return randId;
	}

	uuidv4() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	}

	checkAnswerBasedOnFileContent(fileContent, question) {
		return new Promise((resolve, reject) => {
			let answerAnalysis = {};
			console.log(fileContent);
			answerAnalysis.fileContent = fileContent;
			scriptRunnerService.run(question.testCases, fileContent.content)
				.then((testCaseResult) => answerAnalysis.testCaseResult = testCaseResult)
				.then(() => lintService.runLint(fileContent.content, question.styleRules))
				.then((styleResults) => answerAnalysis.styleResults = styleResults)
				.then(() => sourceCheckingService.runSourceCheck(fileContent.content, question.sourcesToCheck))
				.then((sourceCheckResult) => answerAnalysis.sourceCheckResult = sourceCheckResult)
				.then(() => {
					console.log("answerAnalysis", answerAnalysis);
					resolve(answerAnalysis);
				})
				.catch((err) => {
					console.error("error on result analysis!!", err);
				});
		});
	}
}

module.exports = new AnswersService();