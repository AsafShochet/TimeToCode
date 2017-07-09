/**
 * Created by Asaf.Shochet on 7/9/2017.
 */

class LintService {

	runLint(fileContent, lintConfig) {
		return new Promise((resolve, reject) => {
			// running eslint here
			let styleReport = {
				'commentsPerLine': {
					status: 'pass'
				},
				'meaningfullNames': {
					status: "failed",
					text: 'It is a bad practice to use variables named x1, x2, x3'
				}
			};
			resolve(styleReport);
		});
	}
}

module.exports = new LintService();