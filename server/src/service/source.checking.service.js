/**
 * Created by Asaf.Shochet on 7/9/2017.
 */

class SourceCheckingService {

	runSourceCheck(fileContent, sourceCheckingConfig) {
		return new Promise((resolve, reject) => {
			let copiedFromResult = {
				'google': {
					matches: []
				},
				'internal': {
					matches: [
						{
							studentId: 'id17',
							matchPercentage: 85
						}
					]
				}
			};
			resolve(copiedFromResult);
		});
	}
}

module.exports = new SourceCheckingService();