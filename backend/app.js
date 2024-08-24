// backend/app.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');

const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');
const stockManagerRoutes = require('./routes/stockManagerRoutes');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/admin', adminRoutes);
app.use('/user', userRoutes);
app.use('/stockManager', stockManagerRoutes);

module.exports = app;
