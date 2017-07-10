/**
 * Created by Asaf.Shochet on 7/9/2017.
 */

class DbConnector {

	constructor() {
		this._answers = [];
		this._questions = [];
	}

	saveAnswer(answer) {
		console.log("saving answer", JSON.stringify(answer));
		this._answers.push(answer);
	}

	getAnswers() {
		return this._answers;
	}

	saveQuestion(question) {
		console.log('adding a question ' + JSON.stringify(question));
		this._questions.push(question);
		console.log('questions length: ', this._questions.length);
	}

	getQuestions() {
		console.log('questions length: ', this._questions.length);
		return this._questions;
	}

	getQuestion(questionId) {
		let all = this.getQuestions();
		all.forEach(function (question) {
			if (question.id == questionId) {
				console.log("question with id " + questionId + " found!!");
				return question;
			}
		});
		console.log("question with id " + questionId + " not found, returning the mockup");
		return {
			"title": "Adding numbers",
			"instructions" : "Create a method that sums up 3 numbers (positive, negative, zero). Make sure to make the method name 'run'",
			"testCases": [ //mockup!
				{
					"id": "AAAASS-XASD",
					"input": "1,2,3",
					"output": 6,
					"score": 15
				},
				{
					"id": "AAAASS-SSSSSSSS",
					"input": "-1,-1,2",
					"output": 0,
					"score": 15
				}
			],
			"styling": {
				"commentsPerLine": 1,
				"meaningfulNames" : true
			},
			"sourceChecking": {
				"google" : 80,
				"internal": 60
			}
		}
	}
}

module.exports = new DbConnector();