const express = require('express');
const router = express.Router();
const studentController = require('../controller/student.controller')

router.get('/' , studentController.getData)

router.post('/',studentController.postData)

router.delete('/:id', studentController.deleteData)

router.put('/:id', studentController.updateData)

module.exports = router

