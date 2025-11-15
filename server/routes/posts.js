const express = require('express');
const { createPost, getPosts, getPost, updatePost, deletePost, addComment } = require('../controllers/postController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', createPost);
router.get('/', getPosts);
router.get('/:id', getPost);
router.put('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.post('/:id/comments', addComment);

module.exports = router;
