const express = require('express')
const router = express.Router();
const {generateImage} = require('../controller/openAiControllers')

router.post('/generateimage', generateImage)

module.exports = router;