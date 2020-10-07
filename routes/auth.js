var express = require('express')
var router = express.Router()
const { signin, signout, signup } = require("../controllers/auth")
const {check} =require('express-validator');

router.post("/signup",
[
    check("name","atleast 5 character").isLength({min:5}),
    check("email","emial is required").isEmail(),
    check("password", "password should be atlesast 6char").isLength({min:6}),
],
signup)

router.post("/signin",
[
    check("email","emial is required").isEmail(),
    check("password", "password should be atlesast 6char").isLength({min:6}),
],
signin)

router.get("/signout", signout)


module.exports = router;