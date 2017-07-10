class RestService {
	setNewQuestion({title, description, testCases, lintSettings, copyFromCheck}) {
		return new Promise((resolve, reject) => {
			var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
			xmlhttp.open("POST", "/questions");
			xmlhttp.setRequestHeader("Content-Type", "application/json");
			xmlhttp.send(JSON.stringify({title, instructions: description, testCases, styling: lintSettings, sourceChecking: copyFromCheck}));
		});
	}

	getFirstQuestion() {
		return new Promise((resolve, reject) => {
			var xhr = new XMLHttpRequest();
			xhr.open('get', '/questions', true);
			xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
			xhr.setRequestHeader('Access-Control-Allow-Methods', '*');

			xhr.onload = function () {
				if (this.status == 200) {
					const questionList = JSON.parse(this.response);
					if (questionList && questionList.length > 0){
						resolve(questionList[0]);
					} else {
						resolve(this.response);
					}
				} else {
					reject(this.statusText);
				}
			};

			xhr.send();

		});
	}

	uploadImage(file) {
		return new Promise((resolve, reject) => {
			let imageFormData = new FormData();

			imageFormData.append('file', file);

			var xhr = new XMLHttpRequest();
			xhr.open('post', 'http://localhost:3030/answers', true);
			xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
			xhr.setRequestHeader('Access-Control-Allow-Methods', '*');

			xhr.onload = function () {
				if (this.status == 200) {
					resolve( JSON.parse(this.response));
				} else {
					reject(this.statusText);
				}
			};

			xhr.send(imageFormData);

		});
	}
}

export default new RestService();
