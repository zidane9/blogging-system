# blogging-system

blogging system app

### api
List of user routes:

|   Route    |  HTTP  |         Description         |
| ---------- | ------ | --------------------------- |
| /users     | GET    | Get all users               |
| /users/signup     | POST   | Create a user               |
| /users/:id | DELETE | Delete a user               |
| /users/:id | PUT    | Update a food with new info |
| /users/login | POST    | User login                  |

List of article routes:

|         Route         |  HTTP  |                Description                 |
| --------------------- | ------ | ------------------------------------------ |
| /articles          | GET    | Get all articles                        |
| /articles          | POST   | Create an article                        |
| /articles/:id      | DELETE | Delete an article                        |
| /articles/:id      | PUT    | Update an article with new info          |
| /articles/:id      | GET    | Get an article                           |


### Usage
With only npm:

npm install

### For server
npm start

### For client
npm run dev

Access the website via http://localhost:8080/
