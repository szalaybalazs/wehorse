![Finished page](https://github.com/szalaybalazs/wehorse/raw/master/screenshot.jpeg)

# wehorse coding challange

Task description
---

Created a course list page with a REST API.
The server has a built-in logging system, logging to external files using the winston log manager.

### Available endpoints:

`(GET) /api/courses(?wishlisted=true)` - Returns all the availble courses (optionally filters only the wishlisted ones.)

`(POST) /api/wishlist` - Sets the wishlisted flag on a selected course. **Request body:** `{ course: ID, wishlisted: boolean }`

`(GET) /healthchech` - Get the health status of the server

At the moment the server uses a simple JSON database, which could be changed to MongoDB or any SQL database.

### Frontend

Written in javascript, using react, material-ui & redux.

Build the project
---

After cloning the repo:

```yarn``` - Install the dependencies

```yarn client:build``` - Build the frontend

```yarn server:production``` - Start the server in development mode


### Tests

```yarn tests``` - Run UI tests