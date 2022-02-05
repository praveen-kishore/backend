const express = require('express');
const { signup, signin, profile } = require('../controllers/auth');
const router = express.Router();



router.post('/signup',signup);
router.post('/signin',signin);

router.post('/profile',profile);

module.exports = router;