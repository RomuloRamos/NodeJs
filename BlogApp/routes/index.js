const express = require("express");
const router = express.Router();

// router.use('/admin', require('./admin'));
router.use('/feature', require('./features'));
module.exports = router;