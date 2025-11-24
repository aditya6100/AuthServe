
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

const seedAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

        const adminExists = await User.findOne({ email: 'admin@example.com' });
        if (adminExists) {
            console.log('Admin user already exists.');
            mongoose.connection.close();
            return;
        }

        const adminUser = new User({
            name: 'Admin User',
            email: 'admin@example.com',
            password: 'password123', // This will be hashed by the pre-save hook
            role: 'admin'
        });

        await adminUser.save();
        console.log('Admin user created successfully!');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error seeding admin user:', error);
        mongoose.connection.close();
    }
};

seedAdmin();
