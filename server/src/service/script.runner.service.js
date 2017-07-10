/**
 * Created by Asaf.Shochet on 7/9/2017.
 */

class ScriptRunnerService {

	run(testCases, script) {
		return new Promise((resolve, reject) => {
			let testCasesResults = [];
			console.log("testCases.length", testCases.length);
			let numberOfCases = testCases.length;
			let numberOfCasesDone = 0;

			testCases.forEach(function (testCase) {
				let id = testCase.id;
				let input = testCase.input;
				let expectedOutput = testCase.output;

				var Sandbox = require('sandbox'); // a clear environment to run the code, using http://gf3.github.io/sandbox/
				var sb = new Sandbox();
				console.log("script", script);
				if (!script.endsWith(";")) { // making sure script ends with ;
					script += ";";
				}

				sb.run(script + " run(" + input + ");", function (output) {
					console.log('input: ', input, 'output: ', output);
					console.log("result: " + output.result);
					let testResult = {
						"id": id
					};

					if (output.result == expectedOutput) {
						console.log('yeay!! you are correct!');
						testResult.passed = true;
						testCasesResults.push(testResult);
					} else {
						console.log('boooo!! you are wrong!');
						testResult.result = output.result;
						testResult.passed = false;
						testResult.details = output.result;
						testResult.expectedResult = expectedOutput;
						console.log('boooo!! you are wrong!', JSON.stringify(testResult));

						testCasesResults.push(testResult);
					}

					numberOfCasesDone++;
					if (numberOfCasesDone == numberOfCases) {
						console.log("numberOfCasesDone == numberOfCases", numberOfCasesDone == numberOfCases);
						resolve(testCasesResults);
					}
				})
			});
		});
	}


}

module.exports = new ScriptRunnerService();