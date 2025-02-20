const express = require('express');
const router = express.Router();

let todos = []; // In-memory storage for todos

// Get all todos
router.get('/todos', (req, res) => {
    res.json(todos);
});

// Create a new todo
router.post('/todos', (req, res) => {
    const todo = {
        id: todos.length + 1,
        text: req.body.text,
        completed: false
    };
    todos.push(todo);
    res.status(201).json(todo);
});

// Update a todo
router.put('/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).send('Todo not found');
    
    todo.text = req.body.text;
    todo.completed = req.body.completed;
    res.json(todo);
});

// Delete a todo
router.delete('/todos/:id', (req, res) => {
    const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (todoIndex === -1) return res.status(404).send('Todo not found');
    
    const deletedTodo = todos.splice(todoIndex, 1);
    res.json(deletedTodo);
});

module.exports = router;