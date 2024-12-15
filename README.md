# taskManagementMERN
 
# Task Management System

## Project Overview
A full-stack Task Management System built with MERN (MongoDB, Express, React, Node.js) stack. This application allows users to create, manage, and track tasks with features like authentication, task creation, editing, and status tracking.

## Features
- User Authentication (Register/Login)
- Create, Read, Update, Delete (CRUD) Tasks
- Task Prioritization
- Task Status Management
- Pagination
- Responsive Design

## Prerequisites
- Node.js (v14+)
- MongoDB
- npm or yarn

## Installation

### Clone the Repository
```bash
git clone https://your-repo-url.git
cd task-management-system
```

### Backend Setup
```bash
cd server
npm install
```

### Frontend Setup
```bash
cd client
npm install
```

### Environment Configuration
Create `.env` files in both `server` and `client` directories with necessary configurations.

### Running the Application
#### Development Mode
```bash
# In server directory
npm run server

# In client directory
npm start

# Or use concurrently from server directory
npm run dev
```

## Project Structure
- `client/`: React frontend
- `server/`: Express backend
- `models/`: Database models
- `controllers/`: Business logic
- `routes/`: API endpoint definitions

## Technologies Used
- Frontend: React, React Router, Context API
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JWT
- Styling: CSS

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License
This project is open-source and available under the MIT License.
