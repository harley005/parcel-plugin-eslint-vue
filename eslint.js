const eslint = require('eslint');
const eslintFormatter = require("eslint-friendly-formatter");

const engine = new eslint.CLIEngine({});

module.exports = {
	lint: (code, name) => {
		if (!engine.isPathIgnored(name)) {
			let res = engine.executeOnText(code, name, true);
			return eslintFormatter(res.results);
		}
	}
}