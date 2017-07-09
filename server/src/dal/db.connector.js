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
}

module.exports = new DbConnector();