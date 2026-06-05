
# IssueFlow API

IssueFlow is a backend issue tracking application built with TypeScript, Express and Prisma.

The application allows users to register and log in, create organisations and projects, and manage issues from creation through to completion.


## Why I Built It

I built IssueFlow to practise building a real-world backend application with authentication, database relationships and REST APIs.


## Features

* User registration and login
* JWT authentication and protected routes
* Create and manage organisations
* Create and manage projects
* Create and track issues
* Update issue status

## Built With

* TypeScript
* Express
* Prisma
* SQLite
* JWT Authentication
* Postman

## API Routes

### Authentication

* POST /api/auth/register
* POST /api/auth/login

### Organisations

* POST /api/organisations
* GET /api/organisations

### Projects

* POST /api/projects
* GET /api/projects/:organisationId

### Issues

* POST /api/issues
* GET /api/issues/:projectId
* PATCH /api/issues/:issueId

## Future Improvements

* Input validation
* Improved error handling
* Filtering and pagination
* User roles and permissions
* Issue assignment
