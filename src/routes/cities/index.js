const { Router } = require("express");
const router = Router();

const {getCities} = require('../../controllers/cities')

router.get('/all',getCities)

module.exports = router;