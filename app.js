const express = require('express');
const bodyParser = require('body-parser');
let TodoCache = require('./models/todo/todo-cache');
let TodoItem = require('./models/todo/todo-item');

const urlencodedParser = bodyParser.urlencoded({
		extended: false
	});

const app = express();
let port = 8080;
let todolist = new TodoCache();

/* The to do list and the form are displayed */
app.get('/todo', function (req, res) {
	res.render('todo.ejs', {
		todolist: todolist.list(),
		clickHandler: "func1();"
	});
})

/* Adding an item to the to do list */
.post('/todo/add/', urlencodedParser, function (req, res) {
	todolist.insert(new TodoItem(req.body.newtodo));
	res.redirect('/todo');
})

/* Updates a item in the to do list */
.post('/todo/edit/:id', urlencodedParser, function (req, res) {
	todolist.update(req.params.id, new TodoItem(req.body.editTodo));
	res.redirect('/todo');
})

/* Deletes an item from the to do list */
.get('/todo/delete/:id', function (req, res) {
	todolist.remove(req.params.id);
	res.redirect('/todo');
})

/* Redirects to the to do list if the page requested is not found */
.use(function (req, res, next) {
	res.redirect('/todo');
})

.listen(port);
console.log("Listening on port " + port);
