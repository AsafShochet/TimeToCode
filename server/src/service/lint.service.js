/**
 * Created by Asaf.Shochet on 7/9/2017.
 */

class LintService {

	runLint(fileContent, lintConfig) {
		return new Promise((resolve, reject) => {
			// running eslint here
			let styleReport = [
				{name: 'Has documentation', value: true},
				{name: 'Has correct tabs', value: false},
				{name: 'Has long lines', value: true}
			];
			resolve(styleReport);
		});
	}
}

module.exports = new LintService();