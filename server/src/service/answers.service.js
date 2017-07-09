/**
 * Created by Asaf.Shochet on 7/9/2017.
 */
import dbConnector from '../dal/db.connector';

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
		let fileContent = 'asdfasdfasdf';
		let questionId = answer.questionId;
		let checkingResults = this.checkAnswer(fileContent, questionId);
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

	checkCopiedFrom(fileContent, questionId) {
		return {
			'google': {
				matches : []
			},
			'internal' : {
				matches : [
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
			'commentsPerLine' : {
				status: 'pass'
			},
			'meaningfullNames' :{
				status : 'failed',
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
}

module.exports = new AnswersService();