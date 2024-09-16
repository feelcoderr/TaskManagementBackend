# Task Management API

This is a Task Management APIs built with Node.js, Express, and MongoDB.

## Features

- Users can create tasks with a title and description.
- Users can view a list of all tasks.
- Users can mark tasks as completed.
- Users can update task details.
- Users can delete tasks.

## API Endpoints

- `POST /api/tasks`: Create a task.
- `GET /api/tasks`: Get all tasks.
- `PATCH /api/tasks/:id/complete`: Mark a task as completed.
- `PUT /api/tasks/:id`: Update task details.
- `DELETE /api/tasks/:id`: Delete a task.

## Task Schema

- {
  title : String,
  description : String,
  }
