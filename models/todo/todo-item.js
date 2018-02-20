module.exports = class TodoItem {

	constructor(todoItem) {
		this.name = todoItem;
	}

	get name() {
		return this._name;
	}

	set name(value) {
		this._name = value;
	}
}
