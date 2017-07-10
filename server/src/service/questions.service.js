/**
 * Created by Asaf.Shochet on 7/9/2017.
 */
import dbConnector from '../dal/db.connector';

class QuestionsService {

	saveQuestion(question) {
		question.id = this.uuidv4();
		dbConnector.saveQuestion(question);
		return question.id;
	}

	getQuestions() {
		return dbConnector.getQuestions();
	}

	getQuestion() {
		return dbConnector.getQuestion();
	}

	uuidv4() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	}
}

module.exports = new QuestionsService();