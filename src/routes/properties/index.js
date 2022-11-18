const { Router } = require("express");
const router = Router();

const { createProperty, getAllProperties, findPropertyById} = require('../../controllers/properties')


router.post('/create', createProperty)

router.get('/all',getAllProperties)

router.get('/:id', findPropertyById)

module.exports = router