
const User = require('../models/User');

// @desc    Get user profile
// @route   GET /api/users/me
// @access  Private
exports.getMe = async (req, res) => {
    // The user object is attached to the request in the protect middleware
    const user = await User.findById(req.user.id).select('-password');
    res.status(200).json(user);
};

// @desc    Get all users
// @route   GET /api/users/admin/users
// @access  Private/Admin
exports.getAllUsers = async (req, res) => {
    const users = await User.find({}).select('-password');
    res.status(200).json(users);
};
