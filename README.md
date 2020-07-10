# Node-MySQL-API-Rest

API Rest made using node.js and MySQL.

To run the app locally, ensure that your system has:

- node.js and npm

- MySQL

- apache2 (or similar web server)

## Preparing the environment

- After clone or download, located in the project's directory run _npm install_.

- Set the database credentials in the file userModel.js

- Start apache2 and MySQL services.

- Run _npm start_ (or _npm run dev_ to execute with nodemon).

- Open your browser at _localhost:3000_ to verify that there's no errors.

- Hit the endpoints declared in users.js file (putting before '/api').

_E.g.:_

		localhost:3000/api/users
