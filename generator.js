
((module) => {
	'use strict';

	var serial = require('./utils/gserial.js');

	var create = (...args) => {

		var call = serial(...args);

		return act;

		function * act(...args) {
			for (let element of call(...args, act, call)) {
				yield * getValue(element);
			}
		}

	}

	function * getValue(object) {
		if (object) {
			let result = object.value;
			if (object.deep) {
				yield * result;
			} else {
				yield result;
			}
		}
	}

})(module);
