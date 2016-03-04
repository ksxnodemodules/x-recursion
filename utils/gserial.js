
((module) => {
	'use strict';

	const DEFAULT = (x) => x;

	var serial = (fnlist, check, get) => function * (...args) {
		for (let fn of fnlist) {
			let res = fn(...args);
			if (check(res)) {
				yield * get(res);
			}
		}
	};

	module.exports = (fnlist, check, get) =>
		serial(fnlist, check || DEFAULT, get || DEFAULT);

})(module);
