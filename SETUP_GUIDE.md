# MERN Stack Blog Application - Setup Guide

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Available Scripts](#available-scripts)
- [API Endpoints](#api-endpoints)
- [Troubleshooting](#troubleshooting)

## 🎯 Project Overview

This is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) blog application that demonstrates seamless integration between front-end and back-end components. The application allows users to create, read, update, and delete blog posts with authentication and authorization features.

## 🛠 Technology Stack

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Multer** - File upload handling
- **Morgan** - HTTP request logger
- **CORS** - Cross-Origin Resource Sharing

### Frontend
- **React** - UI library
- **Vite** - Build tool and development server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests

### Development Tools
- **Nodemon** - Auto-restart server on file changes
- **Concurrently** - Run multiple commands simultaneously

## 📁 Project Structure

```
mern-stack-integration-Kimanidavid/
├── client/                      # Frontend React application
│   ├── src/
│   │   ├── components/         # Reusable React components
│   │   │   ├── button.jsx
│   │   │   ├── commentForm.jsx
│   │   │   ├── commentList.jsx
│   │   │   ├── createPostForm.jsx
│   │   │   ├── input.jsx
│   │   │   ├── loader.jsx
│   │   │   ├── postCard.jsx
│   │   │   ├── postList.jsx
│   │   │   └── textArea.jsx
│   │   ├── context/            # React Context for state management
│   │   │   └── authContext.jsx
│   │   ├── hooks/              # Custom React hooks
│   │   │   └── useAuth.jsx
│   │   ├── pages/              # Page components
│   │   │   ├── CreatePost.jsx
│   │   │   ├── postDetails.jsx
│   │   │   └── postList.jsx
│   │   ├── services/           # API service layer
│   │   │   └── api.js
│   │   ├── config/             # Configuration files
│   │   │   └── db.js
│   │   ├── App.jsx             # Main App component
│   │   ├── main.jsx            # React entry point
│   │   └── index.css           # Global styles
│   ├── index.html              # HTML template
│   ├── vite.config.js          # Vite configuration
│   └── package.json            # Client dependencies
│
├── server/                      # Backend Express application
│   ├── controllers/            # Request handlers
│   │   └── postController.js
│   ├── middleware/             # Custom middleware
│   │   └── auth.js
│   ├── models/                 # Mongoose models
│   │   ├── Post.js
│   │   └── user.js
│   ├── routes/                 # API routes
│   │   └── posts.js
│   └── server.js               # Express server entry point
│
├── .env.example                # Environment variables template
├── package.json                # Root dependencies and scripts
└── README.md                   # Project documentation
```

## ✅ Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js** (v14 or higher)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version`

2. **npm** (comes with Node.js)
   - Verify installation: `npm --version`

3. **MongoDB**
   - Option 1: Install locally from [mongodb.com](https://www.mongodb.com/try/download/community)
   - Option 2: Use MongoDB Atlas (cloud database) - [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)

4. **Git** (optional, for version control)
   - Download from [git-scm.com](https://git-scm.com/)

## 📦 Installation

### Step 1: Clone or Download the Repository

```bash
# If using Git
git clone <repository-url>
cd mern-stack-integration-Kimanidavid

# Or download and extract the ZIP file
```

### Step 2: Install Root Dependencies

```bash
npm install
```

This installs:
- Express and backend dependencies
- Nodemon for development
- Concurrently to run multiple processes

### Step 3: Install Client Dependencies

```bash
cd client
npm install
cd ..
```

This installs:
- React and React DOM
- Vite for development and building
- React Router for navigation
- Axios for API calls

### Alternative: Install All Dependencies at Once

```bash
npm run install-all
```

## ⚙️ Configuration

### Step 1: Create Environment File

Create a `.env` file in the root directory:

```bash
# Copy the example file
cp .env.example .env
```

### Step 2: Configure Environment Variables

Edit the `.env` file with your settings:

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/mern-blog
# For MongoDB Atlas, use: mongodb+srv://<username>:<password>@cluster.mongodb.net/mern-blog

# Server Configuration
PORT=5000
NODE_ENV=development

# JWT Secret (use a strong, random string)
JWT_SECRET=your_super_secret_jwt_key_here_change_this_in_production
```

### Step 3: MongoDB Setup

#### Option A: Local MongoDB
1. Start MongoDB service:
   ```bash
   # Windows
   net start MongoDB
   
   # macOS/Linux
   sudo systemctl start mongod
   ```

2. Verify MongoDB is running:
   ```bash
   mongo --version
   ```

#### Option B: MongoDB Atlas (Cloud)
1. Create a free account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Get your connection string
4. Update `MONGODB_URI` in `.env` with your Atlas connection string

## 🚀 Running the Application

### Development Mode (Recommended)

Run both client and server concurrently:

```bash
npm run dev
```

This will:
- Start the Express server on `http://localhost:5000`
- Start the React development server on `http://localhost:3000`
- Enable hot-reloading for both frontend and backend

### Run Server Only

```bash
npm run server
```

Server will run on `http://localhost:5000`

### Run Client Only

```bash
npm run client
```

Client will run on `http://localhost:3000`

### Production Mode

```bash
# Build the client
npm run build

# Start the server
npm start
```

## 📜 Available Scripts

### Root Package Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `npm run dev` | Runs both client and server | Development mode with hot-reload |
| `npm run server` | Runs backend only | Server on port 5000 |
| `npm run client` | Runs frontend only | Client on port 3000 |
| `npm run install-all` | Installs all dependencies | Root + client packages |
| `npm run build` | Builds client for production | Creates optimized build |
| `npm start` | Runs server in production | Production mode |

### Client Package Scripts

```bash
cd client

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔌 API Endpoints

### Posts

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/posts` | Get all posts | No |
| GET | `/api/posts/:id` | Get single post | No |
| POST | `/api/posts` | Create new post | Yes |
| PUT | `/api/posts/:id` | Update post | Yes |
| DELETE | `/api/posts/:id` | Delete post | Yes |

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get current user |

### Categories

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/categories` | Get all categories |
| POST | `/api/categories` | Create category |

## 🐛 Troubleshooting

### Common Issues and Solutions

#### 1. "Missing script: dev" Error

**Problem:** The `dev` script is not defined in package.json

**Solution:** 
- Ensure you have the latest package.json with all scripts
- Run `npm install` to install dependencies including `concurrently`

#### 2. MongoDB Connection Error

**Problem:** Cannot connect to MongoDB

**Solutions:**
- Verify MongoDB is running: `mongod --version`
- Check `MONGODB_URI` in `.env` file
- For local MongoDB, ensure the service is started
- For Atlas, verify your IP is whitelisted and credentials are correct

#### 3. Port Already in Use

**Problem:** Port 5000 or 3000 is already in use

**Solutions:**
- Kill the process using the port:
  ```bash
  # Windows
  netstat -ano | findstr :5000
  taskkill /PID <PID> /F
  
  # macOS/Linux
  lsof -ti:5000 | xargs kill -9
  ```
- Or change the port in `.env` (for server) or `vite.config.js` (for client)

#### 4. Module Not Found Errors

**Problem:** Cannot find module errors

**Solutions:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# For client
cd client
rm -rf node_modules package-lock.json
npm install
```

#### 5. CORS Errors

**Problem:** Cross-Origin Request Blocked

**Solution:**
- Verify CORS is enabled in `server/server.js`
- Check Vite proxy configuration in `client/vite.config.js`
- Ensure API calls use relative paths (e.g., `/api/posts`)

#### 6. JWT Authentication Issues

**Problem:** Token verification fails

**Solutions:**
- Ensure `JWT_SECRET` is set in `.env`
- Check token is being sent in Authorization header
- Verify token hasn't expired

## 📝 Development Tips

### Hot Reloading
- Backend: Nodemon automatically restarts on file changes
- Frontend: Vite provides instant hot module replacement (HMR)

### API Testing
Use tools like:
- Postman
- Insomnia
- Thunder Client (VS Code extension)
- cURL commands

### Debugging
- Backend: Use `console.log()` or Node.js debugger
- Frontend: Use React DevTools browser extension
- Check browser console for errors

### Code Organization
- Keep components small and focused
- Use custom hooks for reusable logic
- Separate business logic from UI components
- Follow consistent naming conventions

## 🔐 Security Notes

**Important for Production:**

1. Change `JWT_SECRET` to a strong, random string
2. Use environment variables for all sensitive data
3. Enable HTTPS
4. Implement rate limiting
5. Validate and sanitize all user inputs
6. Keep dependencies updated
7. Use helmet.js for security headers
8. Implement proper error handling

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Vite Documentation](https://vitejs.dev/)
- [Mongoose Documentation](https://mongoosejs.com/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

ISC License

## 👥 Support

For issues and questions:
- Check the troubleshooting section
- Review existing issues on GitHub
- Create a new issue with detailed information

---

**Happy Coding! 🚀**
