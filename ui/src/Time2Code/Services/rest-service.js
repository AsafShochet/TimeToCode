class RestService {
	setNewQuestion({title, description, testCases, lintSettings, copyFromCheck}){
		console.log('sending new question:', title);
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
					resolve(this.response);
				} else {
					reject(this.statusText);
				}
			};

			xhr.send(imageFormData);

		});
	}
}

export default new RestService();
