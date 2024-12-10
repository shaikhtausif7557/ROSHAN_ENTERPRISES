import express from 'express';
import Project from '../models/project.js';

const router = express.Router();

// Get all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create a new project
router.post('/', async (req, res) => {
    const { name, location, year } = req.body;

    if (!name || !location || !year) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const newProject = new Project({ name, location, year });
        await newProject.save();
        res.status(201).json(newProject);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a project
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await Project.findByIdAndDelete(id);
        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
