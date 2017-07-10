class LintSettingsService {

	constructor() {
		this.lintSettingToName = {
			requirejsdoc: 'Require JS doc',
			maxLineLength: 'Max Line Length',
			maxStatementsInFunctionBlock: 'max Statements In Function Block',
			indentationSpaces: 'Indentation Space'
		};
	}


	getSettingName(setting) {
		return this.lintSettingToName[setting];
	}
}

export default new LintSettingsService();
