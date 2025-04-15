# Library management system

A student project for managing library operations such as book rentals and user administration.

## Overview
A web application for managing a library system. The application allows users to:
- Browse books.
- Register and log in to the system.
- Rent books.
- Reserve books that are temporarily unavailable.
- Manage their rentals.
- For administrators: add, edit, and delete books, manage users, generate reports.

## Application Structure

- **Frontend**: React.js + TypeScript
- **Backend**: Node.js + Express.js + TypeScript
- **Database**: PostgreSQL
- **Containerization**: Docker

## Features

### 1. Frontend (React.js)

#### Home Page
- Display available books.
- Search books by title, author, category, etc.
- Filters and sorting options (e.g., by publication date, popularity).

#### Registration and Login
- Registration form (name, surname, email, password).
- User login (email, password).
- Email verification (confirmation link sent after registration).

#### User Profile Page
- View rented books.
- Extend rental (if the book is not reserved).
- View rental history and late fees.

#### Book Details Page
- Display detailed information about the book (description, author, available copies, year of publication).
- Option to rent the book.
- Option to reserve the book (if the book is currently rented).

#### Admin Panel
- Manage books: add, edit, delete books.
- Manage users: view, edit, block users.
- Generate reports: rental reports, book availability, overdue rentals.

### 2. Backend (Node.js + Express.js + TypeScript)

#### User Authentication
- User login and registration.
- JWT (JSON Web Tokens) for authorization.
- Password encryption using bcrypt.

#### Book Management
- API for managing books (CRUD - Create, Read, Update, Delete).
- Add, edit, and delete books in the database.

#### Rental Management
- API for managing book rentals (renting, extending, returning).
- Logic related to rental dates (e.g., checking if a book is available).
- Book reservation handling.

#### Reports
- Generating reports (e.g., rentals, book availability, overdue rentals).
- API for fetching reports in JSON format.

#### Tables

**Users**:
   - Stores user information (ID, first name, last name, email, password, role).

**Books**:
   - Stores book details (ID, title, author, year of publication, ISBN, available copies).

**Rentals**:
   - Stores rental information (book ID, user ID, rental date, return date, status).