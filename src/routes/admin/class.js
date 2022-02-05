const express = require('express');
const { classes, classAdd, classEdit,classUpdate, classDelete } = require('../../controllers/admin/class');
const router = express.Router();

router.get('/admin/class',classes);
router.post('/admin/class-add',classAdd);
router.get('/admin/class-edit/:id',classEdit);
router.put('/admin/class-update/:id',classUpdate);
router.delete('/admin/class-delete/:id',classDelete);

module.exports = router;