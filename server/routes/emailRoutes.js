const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');



// POST email address
router.post('/', emailController.submitEmailAddress);


module.exports = router;


