module.exports = class TodoCache {

	constructor() {
		this._todoItems = [];
	}

	list() {
		return this._todoItems;
	}

	update(index, item) {
		console.log(item);
		if (typeof item !== "undefined" && item != '') {
			this._todoItems[index] = item;
		}
	}

	insert(item) {
		if (item && item.name != '') {
			this._todoItems.push(item);
		}
	}

	remove(index) {
		if (index != '') {
			this._todoItems.splice(index, 1);
		}

	}
}
