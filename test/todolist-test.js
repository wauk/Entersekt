var assert = require('assert');
let TodoCache = require('../models/todo/todo-cache');
let TodoItem = require('../models/todo/todo-item');

describe('Test the todo list models.', function() {
  
	beforeEach(function() {
	});

    it('Should add an todo list item if insert is called.', function() {
      //Arrange
	  let todoList = new TodoCache();
	  let todoItem = new TodoItem("foo");
	  
	  //Act
	  todoList.insert(todoItem);
	  
	  //Assert
	  
	  assert.equal(1, todoList.list().length);
    });
	
	it('Can not add a todo item with a empty name', function() {
      //Arrange
	  let todoList = new TodoCache();
	  let todoItem1 = new TodoItem("foo");
	  
	  //Act
	  todoList.insert(todoItem1);
	  
	  //Assert
	  assert.equal("foo", todoList.list()[0].name);
    });
	
	it('Should remove item at index 1 when remove is called with index : 1.', function() {
      //Arrange
	  let todoList = new TodoCache();
	  let todoItem1 = new TodoItem("foo");
	  let todoItem2 = new TodoItem("bar");
	  let todoItem3 = new TodoItem("foobar");
	  todoList.insert(todoItem1);
	  todoList.insert(todoItem2);
	  todoList.insert(todoItem3);
	  
	  //Act
	  todoList.remove(1);
	  
	  //Assert
	  assert.equal(2, todoList.list().length);
	  assert.equal("foo", todoList.list()[0].name);
	  assert.equal("foobar", todoList.list()[1].name);
    });
	
	it('Updates item at index 1 when update is called with index 1', function() {
      //Arrange
	  let todoList = new TodoCache();
	  let todoItem1 = new TodoItem("foo");
	  let todoItem2 = new TodoItem("bar");
	  let todoItem3 = new TodoItem("foobar");
	  todoList.insert(todoItem1);
	  todoList.insert(todoItem2);
	  todoList.insert(todoItem3);
	  
	  //Act
	  let updateItem = new TodoItem("notbar")
	  todoList.update(1, updateItem);
	  
	  //Assert
	  assert.equal(3, todoList.list().length);
	  assert.equal("foo", todoList.list()[0].name);
	  assert.equal("notbar", todoList.list()[1].name);
	  assert.equal("foobar", todoList.list()[2].name);
    });
	
	it('Can not update a todo items name to be empty', function() {
      //Arrange
	  let todoList = new TodoCache();
	  let todoItem1 = new TodoItem("foo");
	  todoList.insert(todoItem1);
	  
	  //Act
	  let updateItem = new TodoItem("")
	  todoList.update(0, updateItem);
	  
	  //Assert
	  assert.equal("foo", todoList.list()[0].name);
    });

});