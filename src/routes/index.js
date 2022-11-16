const { Router } = require("express");
const router = Router();

const properties = require('./properties')
const cities = require('./cities')
const users = require('./user')

router.use('/properties',properties)
router.use('/cities',cities)
router.use('/users', users)

module.exports = router;
