const express = require('express');
const router = express.Router()
const todosCtrl = require('../../controllers/api/todos');

router.post('/new', todosCtrl.addTodo);
router.put('/update', todosCtrl.update);
router.delete('/:id', todosCtrl.deleteTodo)

module.exports = router;