const express = require('express');
const ctrl = require('@apps/landing/controller');


const router = express.Router();
router.get('/', ctrl.landing);


module.exports = router;
