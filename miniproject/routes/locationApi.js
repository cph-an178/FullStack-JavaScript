var express = require('express');
var router = express.Router();
var login = require("../facades/loginFacade")


router.post('/login', async function(req, res, next) {
    const d = req.body;
    console.log(d)
    try {
        const friends = await login(d.username, d.password, d.longitude, d.latitude, d.distance);
        res.json(friends)
    }
    catch(err){
        res.status(403)
        res.json(err)
    }
});

module.exports = router;
