const express = require('express');
const router = express.Router();
const handler = require('./handler');
const { callHandler } = require('../../utils');

router.post('/api/login', callHandler(handler));

module.exports = router;