const VueAsset = require('parcel-bundler/src/assets/VueAsset');
const Logger = require('../logger');
const ESLint = require('../eslint');

class VueESLintAsset extends VueAsset {
	async load() {
		const code = await super.load();

		const error = ESLint.lint(code, this.name);
		if (error) {
			Logger.add(error);
		}
		
		return code;
	}
}

module.exports = VueESLintAsset;