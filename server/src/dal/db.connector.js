/**
 * Created by Asaf.Shochet on 7/9/2017.
 */

class DbConnector {

	constructor() {
		this._answers = [];
		this._questions = [];

	}

	saveAnswer(answer) {
		this._answers.push(answer);
	}

	getAnswers() {
		return this._answers;
	}

	saveQuestion(question) {
		console.log('adding a question '+ JSON.stringify(question));
		this._questions.push(question);
		console.log('questions length: ', this._questions.length);
	}

	getQuestions() {
		console.log('questions length: ', this._questions.length);
		return this._questions;
	}

	getQuestion(questionId) {
		let all = this.getQuestions();
		all.forEach(function(question) {
			if (question.id == questionId) {
				console.log("question with id "+questionId+" found!!");
				return question;
			}
		});
		console.log("question with id "+questionId+" not found");
		return {};
	}


}

module.exports = new DbConnector();