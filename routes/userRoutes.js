
const express = require('express');
const router = express.Router();
const { getMe, getAllUsers } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');

router.get('/me', protect, getMe);
router.get('/admin/users', protect, admin, getAllUsers);

module.exports = router;
