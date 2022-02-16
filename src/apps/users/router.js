const express = require('express');
const ctrl = require('@apps/users/controller');


const router = express.Router();
router.get('/', ctrl.getUsers);
router.get('/:id', ctrl.getUserByID);


module.exports = router;
