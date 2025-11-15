# 🚀 Quick Start Guide

## Get Started in 3 Steps

### 1️⃣ Install Dependencies

```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install
cd ..
```

Or use the shortcut:
```bash
npm run install-all
```

### 2️⃣ Configure Environment

Create a `.env` file in the root directory:

```env
MONGODB_URI=mongodb://localhost:27017/mern-blog
PORT=5000
NODE_ENV=development
JWT_SECRET=your_secret_key_change_this
```

### 3️⃣ Run the Application

```bash
npm run dev
```

This starts:
- ✅ Backend server on http://localhost:5000
- ✅ Frontend app on http://localhost:3000

## 📝 What You Just Fixed

The error `npm error Missing script: "dev"` occurred because the package.json was missing the development scripts. 

### What Was Added:

**Root package.json scripts:**
```json
{
  "scripts": {
    "server": "nodemon server/server.js",
    "client": "cd client && npm run dev",
    "dev": "concurrently \"npm run server\" \"npm run client\"",
    "install-all": "npm install && cd client && npm install",
    "build": "cd client && npm run build",
    "start": "node server/server.js"
  }
}
```

**New files created:**
- ✅ `client/package.json` - React app dependencies
- ✅ `client/vite.config.js` - Vite configuration with proxy
- ✅ `client/index.html` - HTML entry point
- ✅ `client/src/main.jsx` - React entry point
- ✅ `client/src/index.css` - Global styles
- ✅ `.env.example` - Environment variables template

## 🎯 Next Steps

1. **Start MongoDB** (if using local):
   ```bash
   # Windows
   net start MongoDB
   
   # macOS/Linux
   sudo systemctl start mongod
   ```

2. **Run the app**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 🔧 Useful Commands

| Command | What it does |
|---------|--------------|
| `npm run dev` | Run both client & server |
| `npm run server` | Run backend only |
| `npm run client` | Run frontend only |
| `npm start` | Production mode |

## ❓ Still Having Issues?

Check the full [SETUP_GUIDE.md](./SETUP_GUIDE.md) for:
- Detailed troubleshooting
- MongoDB setup instructions
- API documentation
- Security best practices

## 📚 Project Structure

```
├── client/          # React frontend (Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/
│   └── package.json
├── server/          # Express backend
│   ├── controllers/
│   ├── models/
│   └── routes/
├── .env            # Your environment variables
└── package.json    # Root dependencies
```

---

**You're all set! Happy coding! 🎉**
