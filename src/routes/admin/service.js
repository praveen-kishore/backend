const express = require('express');
const { Servicees, ServiceAdd, ServiceEdit,ServiceUpdate, ServiceDelete } = require('../../controllers/admin/service');
const router = express.Router();

router.get('/admin/service',Servicees);
router.post('/admin/service-add',ServiceAdd);
router.get('/admin/service-edit/:id',ServiceEdit);
router.put('/admin/service-update/:id',ServiceUpdate);
router.delete('/admin/service-delete/:id',ServiceDelete);

module.exports = router;