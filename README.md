NodeJS + Express
======================
This is a simple NodeJS + Express application. This application serves as a basic template for a web server using NodeJS for the backend, Express as the web application framework.

What does this application do?
-------------------------------
This application serves a simple web server that listens on defined port, default: `3000`.


# How to run?
You can run the application in one of the following ways:

1. Press `F5`. This will start the application in debug mode.

2. Open a terminal by going to 'View' -> 'Terminal'. Then run: 
    > `npm run dev`

This will start the application in development mode.


Via curl command:
-----------------
1. Open a terminal.
2. Type the following command: 
   > `curl http://localhost:3000`
3. Press 'Enter' to make the request.

Via Thunder Client:
-------------------
1. Click on the Thunder Client icon on the activity bar on the side. If you can't find it, you can search for 'Thunder Client' in the 'View' -> 'Extensions' menu.
2. Once Thunder Client is open, click on 'New Request'.
3. In the 'Request URL' field, enter the URL of your application (e.g., http://localhost:3000) and select the HTTP method from the dropdown menu.
5. Click on 'Send' to make the request.


Give curl or postman commands to check it was working or not

GET- curl -X GET http://localhost:3000/api/todos //get the data


//CREATE a new todo list

POST- curl -X POST http://localhost:3000/api/todos -H "Content-Type: application/json" -d '{"text": "Your todo text"}' 

//UPDATE

PUT- curl -X PUT http://localhost:3000/api/todos/1 -H "Content-Type: application/json" -d '{"text": "Updated text", "completed": true}' 

//DELETE

DELETE- curl -X DELETE http://localhost:3000/api/todos/1

When it works it should get this page 
![image](https://github.com/user-attachments/assets/682e3680-8137-4b82-9fe9-b97e57e0705e)




Happy coding!
