const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const { isMongoConnected, getLocalStore, saveLocalStore } = require('../config/db');

// GET /api/projects - All projects with optional category filter
router.get('/', async (req, res) => {
  try {
    const { category, featured } = req.query;

    if (isMongoConnected()) {
      const query = {};
      if (category && category !== 'All') query.category = category;
      if (featured === 'true') query.featured = true;
      const projects = await Project.find(query).sort({ createdAt: -1 });
      return res.json(projects);
    }

    // Local fallback store
    const store = getLocalStore();
    let projects = store.projects || [];
    if (category && category !== 'All') {
      projects = projects.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }
    if (featured === 'true') {
      projects = projects.filter(p => p.featured === true);
    }
    return res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Failed to retrieve projects' });
  }
});

// GET /api/projects/:id - Single project
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (isMongoConnected()) {
      const project = await Project.findById(id);
      if (!project) return res.status(404).json({ error: 'Project not found' });
      return res.json(project);
    }

    const store = getLocalStore();
    const project = (store.projects || []).find(p => p._id === id || p.id === id);
    if (!project) return res.status(404).json({ error: 'Project not found' });
    return res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch project' });
  }
});

// POST /api/projects - Create new project
router.post('/', async (req, res) => {
  try {
    const projectData = req.body;

    if (isMongoConnected()) {
      const newProject = new Project(projectData);
      await newProject.save();
      return res.status(201).json(newProject);
    }

    const store = getLocalStore();
    const newProject = {
      _id: 'proj_' + Date.now(),
      createdAt: new Date().toISOString(),
      ...projectData
    };
    store.projects = [newProject, ...(store.projects || [])];
    saveLocalStore(store);
    return res.status(201).json(newProject);
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(400).json({ error: 'Failed to create project', details: error.message });
  }
});

// PUT /api/projects/:id - Update project
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    if (isMongoConnected()) {
      const updated = await Project.findByIdAndUpdate(id, updateData, { new: true });
      if (!updated) return res.status(404).json({ error: 'Project not found' });
      return res.json(updated);
    }

    const store = getLocalStore();
    const index = (store.projects || []).findIndex(p => p._id === id || p.id === id);
    if (index === -1) return res.status(404).json({ error: 'Project not found' });

    store.projects[index] = { ...store.projects[index], ...updateData };
    saveLocalStore(store);
    return res.json(store.projects[index]);
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(500).json({ error: 'Failed to update project' });
  }
});

// DELETE /api/projects/:id - Delete project
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (isMongoConnected()) {
      await Project.findByIdAndDelete(id);
      return res.json({ message: 'Project deleted successfully' });
    }

    const store = getLocalStore();
    store.projects = (store.projects || []).filter(p => p._id !== id && p.id !== id);
    saveLocalStore(store);
    return res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete project' });
  }
});

module.exports = router;
