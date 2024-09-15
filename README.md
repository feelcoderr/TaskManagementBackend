# Task Management API

This is a simple Task Management API built with Node.js, Express, and MongoDB.

## Features

- Users can create tasks with a title and description.
- Users can view a list of all tasks.
- Users can mark tasks as completed.
- Users can update task details.
- Users can delete tasks.

## Installation

1. Clone the repository.
2. Install dependencies:

## API Endpoints

- `POST /api/tasks`: Create a task.
- `GET /api/tasks`: Get all tasks.
- `PATCH /api/tasks/:id/complete`: Mark a task as completed.
- `PUT /api/tasks/:id`: Update task details.
- `DELETE /api/tasks/:id`: Delete a task.

## Key Decisions

- **Mongoose** was used for MongoDB interaction to take advantage of schema validation.
- Input validation and error handling were implemented to ensure robust operations.
