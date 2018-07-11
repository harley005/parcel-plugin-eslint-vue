let errors = [];

module.exports = {
	add: (log) => {
		errors.push(log);
	},
	get: () => {
		return errors;
	},
	clear: () => {
		errors = [];
	}
}