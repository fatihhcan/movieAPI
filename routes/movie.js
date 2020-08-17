const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    req.setEncoding('respond with a resource');
});

module.exports = router;