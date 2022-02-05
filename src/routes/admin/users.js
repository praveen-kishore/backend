const express = require('express');
const { usersList } = require('../../controllers/admin/users');
const router = express.Router();

router.get('/admin/users-list',usersList);

module.exports = router;