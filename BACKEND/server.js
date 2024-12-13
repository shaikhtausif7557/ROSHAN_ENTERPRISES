import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import projectRoutes from './routes/projects.js';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const _dirname = path.resolve();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/projects', projectRoutes);

app.use(express.static(path.join(_dirname, 'FRONTEND/dist')));
app.get('*', (_, res) => {
    res.sendFile(path.resolve(_dirname, 'FRONTEND', 'dist', 'index.html'));
});

// MongoDB connection
mongoose
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
