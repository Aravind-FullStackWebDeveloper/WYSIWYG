# MERN Web Editor

## Table of Contents
1. [Introduction]
2. [Features]
3. [Prerequisites]
4. [Getting Started]
    - [Frontend Setup]
    - [Backend Setup]
5. [Usage]
6. [Folder Structure]
7. [Technologies Used]
8. [Contributing]
9. [License]

## Introduction
The MERN Web Editor is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js).
It provides users with a drag-and-drop WYSIWYG (What You See Is What You Get) interface for building web pages, similar to popular platforms like Confluence, WordPress, and Wix.

## Features
- Drag-and-Drop Functionality
- Component Library
- Editable Properties
- Responsive Design Preview
- Saving and Loading
- Export/Import Function
- SEO Optimization Tools
- User Authentication

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js installed on your local machine
- MongoDB Atlas account for database storage
- Git installed for version control

## Getting Started
### Frontend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/frontend-repo.git
   ```
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory of the frontend project and add the following environment variables:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```
5. Start the frontend development server:
   ```bash
   npm start
   ```

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/backend-repo.git
   ```
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory of the backend project and add the following environment variables:
   ```
   MONGO_URI=your-mongodb-uri
   JWT_SECRET=your-jwt-secret
   PORT=5000
   ```
5. Start the backend server:
   ```bash
   npm start
   ```

## Usage
1. Open your web browser and navigate to `http://localhost:3000` to access the MERN Web Editor frontend.
2. Sign up or log in to access the editor functionality.
3. Use the drag-and-drop interface to build and customize web pages.
4. Save, export, and import your designs as needed.

## Folder Structure
The project folder structure is organized as follows:
- `public/`: Static assets and HTML template files for the frontend.
- `src/`: Source code for the frontend and backend.
  - `actions/`: Redux action creators for managing state.
  - `components/`: React components for the frontend, organized by feature.
  - `reducers/`: Redux reducers for handling state changes.
  - `store/`: Redux store configuration.
  - `routes/`: Express routes for the backend API.
  - `middleware/`: Middleware functions for request handling.
- `.env`: Environment variable configuration file.
- `package.json`: Node.js project configuration file.
- `README.md`: Project documentation.

## Technologies Used
- Frontend: React, Redux, HTML, CSS, Bootstrap
- Backend: Node.js, Express.js, MongoDB
- Database: MongoDB Atlas
- Authentication: JSON Web Tokens (JWT)

## Contributing
Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md) before submitting pull requests.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
