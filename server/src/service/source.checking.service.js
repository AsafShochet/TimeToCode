/**
 * Created by Asaf.Shochet on 7/9/2017.
 */

class SourceCheckingService {

	runSourceCheck(fileContent, sourceCheckingConfig) {
		return new Promise((resolve, reject) => {
			let copiedFromResult = [
				{name: 'Previous assignments', value: false},
				{name: 'StackOverflow', value: true, message: "partially copied from question: 'https://stackoverflow.com/questions/20035101/no-access-control-allow-origin-header-is-present-on-the-requested-resource'"},
				{name: 'Google', value: false}
			];
			resolve(copiedFromResult);
		});
	}
}

module.exports = new SourceCheckingService();