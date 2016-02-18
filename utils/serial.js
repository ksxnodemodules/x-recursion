
((module) => {
	'use strict';

	const DEFAULT = (x) => x;

	var serial = (fnlist, check, get) => (...args) => {
		for (let fn of fnlist) {
			let res = fnlist(...args);
			if (check(res)) {
				return get(res);
			}
		}
	};

	module.exports = (fnlist, check, get) =>
		serial(fnlist, check || DEFAULT, get || DEFAULT);

})(module);
