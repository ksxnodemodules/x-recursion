
((module) => {
	'use strict';

	var serial = require('./utils/fserial.js');

	var create = (...args) => {

		var call = serial(...args);

		var act = (...args) =>
			getValue(call(...args, act, call));

		return act;

	};

	module.exports = create;

	var getValue = (object) => object && object.value;

})(module);
