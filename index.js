
((module) => {
	'use strict';

	module.exports = {
		'function': require('./function.js'),
		'generator': require('./generator.js'),
		'utils': require('./utils')
	};

})(module);
