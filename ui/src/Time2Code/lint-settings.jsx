import React from 'react';
import LintSettingsService from './Services/lint-util'

class LintSetting extends React.Component {

	constructor(props) {
		super(props);

		this.lintSettingChange = this.lintSettingChange.bind(this);
		this.updateSettingValue = this.updateSettingValue.bind(this);
	}

	render() {
		return (
			<div className="Lint-setting-area row">
				<h3>Code Styling Settings</h3>
				{this.renderLintSettingsList()}
			</div>
		);
	};

	renderLintSettingsList() {
		const { lintSettings } = this.props;

		return (
			<div>
				{Object.keys(lintSettings).map(settingKey => (
					<div className="lint-setting-line">
						<input type="checkbox"
						       checked={lintSettings[settingKey].enable}
						       onChange={e => this.lintSettingChange(lintSettings[settingKey], e.target.checked)}
						/>
						<label className="lint-setting-label">{LintSettingsService.getSettingName(settingKey)}</label>
						{this.renderValueField(lintSettings[settingKey])}
					</div>
				))}
			</div>
		);
	}

	renderValueField(setting) {
		if (Object.keys(setting).indexOf('value') === -1){
			return null;
		}
		if (!setting.enable){
			return null;
		}
		return (
			<input
				className="lint-setting-value-field"
				type="number"
				value={setting.value}
				onChange={e => this.updateSettingValue(setting, e.target.value)}
			/>
		)
	}

	lintSettingChange(setting, fieldValue) {
		const field = {};
		field.enable = fieldValue;
		Object.assign(setting, field);
		this.forceUpdate();
	}

	updateSettingValue(setting, fieldValue) {
		const field = {};
		field.value = fieldValue;
		Object.assign(setting, field);
		this.forceUpdate();
	}
}

export default LintSetting;
