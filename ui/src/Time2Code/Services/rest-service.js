class RestService {
	setNewQuestion({title, description, testCases, lintSettings, copyFromCheck}){
		console.log('sending new question:', title);
	}
}

export default new RestService();
