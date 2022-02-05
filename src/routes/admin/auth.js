const express = require('express');
const { signup, signin, signout, profile } = require('../../controllers/admin/auth');
// const { usersList } = require('../../controllers/admin/users');
const router = express.Router();

router.post('/admin/signup',signup);
router.post('/admin/signin',signin);
router.post('/admin/signout',signout);

router.post('/admin/profile',profile);
// router.get('/admin/users-list',usersList);

module.exports = router;