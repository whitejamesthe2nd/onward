## HTML
* `GET /` `StaticPagesController#root`

## API Endpoints
### `users`
* `GET /api/users/:id` - returns user Home page stuff
* `POST /api/users` - sign up

### `session`
* `POST /api/session` - log in
* `DELETE /api/session` - log out

### `tasks`
* `GET /api/users:id/tasks` - get tasks associated with the user.

### `projects`
* `GET /api/user:id/projects` - returns list of projects associated with the user

### `Organizations`
* `GET /api/user:id/organizations` - returns list of projects organizations with the user
