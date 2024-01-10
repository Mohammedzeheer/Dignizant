const express = require('express');
const router = express.Router();
const user = require('../controllers/userController')

router.post('/submit-quiz',user.addQuiz)

module.exports = router;