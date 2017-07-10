/**
 * Created by Asaf.Shochet on 7/9/2017.
 */

class SourceCheckingService {

	runSourceCheck(fileContent, sourceCheckingConfig) {
		return new Promise((resolve, reject) => {
			let copiedFromResult = [
				{name: 'Previous assignments', value: true},
				{name: 'StackOverflow', value: false, message: "partially copied from question: 'https://stackoverflow.com/questions/20035101"},
				{name: 'Google', value: true}
			];
			resolve(copiedFromResult);
		});
	}
}

module.exports = new SourceCheckingService();