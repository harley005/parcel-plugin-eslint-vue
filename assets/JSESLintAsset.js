const JSAsset = require('parcel-bundler/src/assets/JSAsset');
const Logger = require('../logger');
const ESLint = require('../eslint');

class JSESLintAsset extends JSAsset {
	async load() {
		const code = await super.load();

		const error = ESLint.lint(code, this.name);
		if (error) {
			Logger.add(error);
		}
		
		return code;
	}
}

module.exports = JSESLintAsset;