// client/src/services/api.js
import axios from 'axios';

// Create Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: { 'Content-Type': 'application/json' }
});

// Request interceptor for JWT authentication
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => Promise.reject(error));

// Response interceptor for global error handling
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// ----------- Blog API Service ------------

export const postService = {
  // Fetch all posts
  getAllPosts: async () => {
    const res = await api.get('/posts');
    return res.data;
  },

  // Fetch a post by ID
  getPost: async id => {
    const res = await api.get(`/posts/${id}`);
    return res.data;
  },

  // Create a new post
  createPost: async data => {
    const res = await api.post('/posts', data);
    return res.data;
  },

  // Update post by ID
  updatePost: async (id, data) => {
    const res = await api.put(`/posts/${id}`, data);
    return res.data;
  },

  // Delete post
  deletePost: async id => {
    const res = await api.delete(`/posts/${id}`);
    return res.data;
  },

  // Add a comment to a post
  addComment: async (id, comment) => {
    const res = await api.post(`/posts/${id}/comments`, comment);
    return res.data;
  }
};

// ----------- Auth API Service ------------

export const authService = {
  // Register new user
  register: async data => {
    const res = await api.post('/auth/register', data);
    return res.data;
  },

  // Login user
  login: async data => {
    const res = await api.post('/auth/login', data);
    if (res.data.token) {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
    }
    return res.data;
  },

  // Logout
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
};

export default api;
