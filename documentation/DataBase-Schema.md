## `users`
| Column Name     | Data Type | Details                   |
|:-----------------|:-----------:|:----------------------|
| `id`              | integer   | not null, primary key     |
| `username`        | string    | not null, indexed, unique |
| `email`           | string    | not null, indexed, unique |
| `hashedPassword`  | string    | not null                  |
| `token_id`        | string    | not null, indexed, unique |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |
* index on `username, unique: true`
* index on `email, unique: true`
* index on `session_token, unique: true`

## `Tasks`
| Column Name     | Data Type | Details                   |
|:-----------------|:-----------:|:-----------------------|
| `id`              | integer   | not null, primary key     |
| `user_id`         | integer   | not null, foriegn key,unique|
| `project_id`      | integer   | not null, foriegn key,unique|
| `description`     | string    | not null,                 |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |
* `user_id` references `users`
* `project_id` references `projects`

## `Projects`
| Column Name     | Data Type | Details                        |
|:-----------------|:-----------:|:---------------------------|
| `id`              | integer   | not null, primary key          |
| `user_id`         | integer   | not null, indexed, unique, foreign key|
| `name`            | string   | not null                       |
| `description`     | text      |                                |
| `created_at`      | datetime  | not null                       |
| `updated_at`      | datetime  | not null                       |
* `user_id` references `users`


## `Organizations`
| Column Name     | Data Type | Details                                |
|:-----------------|:-----------:|:-----------------------------------|
| `id`              | integer   | not null, primary key                  |
| `users_id`        | integer   | not null, unique, foreign key          |
| `description`     | string    | not null                               |
| `created_at`      | datetime  | not null                               |
| `updated_at`      | datetime  | not null                               |
* `users` references `users`
