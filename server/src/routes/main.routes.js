// Import node module
import express from 'express';
import questionsService from '../service/questions.service';
import answersService from '../service/answers.service';

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

router.post('/upload', (req, res) => {
	console.log('upload starting');
	const formidable = require('formidable');
	const path = require('path');
	const uploadDir = path.join(__dirname, '../','../','/uploads/'); //i made this  before the function because i use it multiple times for deleting later

	let savedPath;
	var form = new formidable.IncomingForm();
	form.multiples = true;
	form.keepExtensions = true;
	form.uploadDir = uploadDir;
	form.parse(req, (err, fields, files) => {

		if (err) {
			console.error('upload error', err);
			return res.status(500).json({error: err})
		}
		console.log('upload success!!');
	});
	form.on('fileBegin', function (name, file) {
		console.log('fileBegin started!!');
		const [fileName, fileExt] = file.name.split('.');
		file.path = path.join(uploadDir, `${fileName}_${new Date().getTime()}.${fileExt}`);
		savedPath = file.path;
	});

	form.on('end', function(err, success) {
		var fs = require('fs');
		console.log("savedPath", savedPath);
		fs.readFile(savedPath, function(err, data) {
			console.log(data);
			if (err) {
				console.error(err);
			}
			res.status(200).json({uploaded: data});
		});

	})
});


// Exporting an object as the default import for this module
export default router;
