var values = function values(object) {
	return Object.keys(object).map(function (key) {
		return object[key];
	});
}

Object.defineProperty ? Object.defineProperty(Object, 'values', {
	configurable: true,
	enumerate: false,
	value: values,
	writable: true
}) : (Object.values = values);