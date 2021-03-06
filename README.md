# Todo list exercise

### Install

- Install https://nodejs.org/en/
- Download archive from link provided
- Unzip file and cd into it
- run `npm install`

### Run
`node app.js`

### Test
npm test

> ### Docker
> -Build: ```docker build -t my-todo-list .```

> -Run: ```docker run -p 49160:8080 -d my-todo-list```

Visit http://localhost:8080 in your browser

### High level application requirements
1. Multiple users should be able to view the shared public todo list
2. Should be able to add items
3. Should be able to delete items
4. Should be able to edit items (Missing feature)
5. Must be able to deploy in docker (Missing feature)

### Tasks
1. Add missing requirement #4 to the application
2. Add sufficient test coverage to the application and update readme on howto run the tests
3. Add missing requirement #5 to the application (Dockerfile and update readme with instructions)

### Bonus
4. Display test coverage after tests are executed
5. Find and fix the XSS vulnerability in the application. Also make sure that it wont happen again by including a test.

> ### Notes
> - Update the code as needed and document what you have done in the readme below
> - Will be nice if you can git tag the tasks by number

### Solution
Task 1 
-Seperated the todo-list logic from the express framework to loosely couple it and make it unit testable.
-Implemented requirement #4.

Task 2
-Added Mocha test framework to unit test the models.
-fixed a bug that the test exposed.

Task 3
-Dockerized the node js web app.

Task 4
-Added nyc test coverage for mocha.

Task 5
-Fixed the XSS Vulnerability by encoding the content that gets displayed. 



