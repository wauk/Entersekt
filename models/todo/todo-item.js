var htmlencode = require('htmlencode');

module.exports = class TodoItem {

	constructor(todoItem) {
		this.name = todoItem;
	}

	get name() {
		return this._name;
	}

	set name(value) {
		this._name = htmlencode.htmlEncode(value);
	}
}
