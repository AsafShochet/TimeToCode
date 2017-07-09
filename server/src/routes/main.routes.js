// Import node module
import express from 'express';
import questionsService from '../service/questions.service';
import answersService from '../service/answers.service';
import scriptRunnerService from '../service/script.runner.service';

const router = express.Router();

// Arrow functions
router.get('/', (req, res) => {
	res.send({message: 'Hello World!!'});
});


/**
 * adding a question to the list
 */
router.post('/questions', (req, res) => {
	let questionFromBody = req.body;
	console.log('questionFromBody: ' + questionFromBody);

	let questionId = questionsService.saveQuestion(questionFromBody);
	res.send({"questionId": questionId});
});

/**
 * returns an array of all the questions
 */
router.get('/questions', (req, res) => {
	let questions = questionsService.getQuestions();
	console.log('questions for response: ', JSON.stringify(questions));
	res.send(questions);
});

router.post('/answers', (req, res) => {
	let body = req.body;
	console.log('save answers body: ' + body);
	let answerId = answersService.saveAnswer(body, {});
	res.send({"answerId": answerId});
});

router.get('/answers', (req, res) => {
	let body = req.body;
	console.log('get answers body: ' + body);
	let answers = answersService.getAnswers();
	res.send(answers);
});


// Exporting an object as the default import for this module
export default router;
