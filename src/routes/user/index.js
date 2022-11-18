const Router = require("express");
const router = Router();

const {signUp} = require('../../controllers/users')

router.post('/create',signUp);

module.exports = router;