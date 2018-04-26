var express = require('express');
var router = express.Router();
var loginFacade = require('../facades/loginFacade');
var userFacade = require('../facades/userFacade');
var blogFacade = require('../facades/blogFacade');
var positon = require('../models/position');


router.post('/addLocationBlog', async function (req, res) {
    const body = req.body;
    const user = await userFacade.findByUsername(body.author);
    try {
        await blogFacade.addLoctaionBlog(body.info, user, body.longitude, body.latitude);
        res.send("succes");
    }
    catch (err) {
        res.send(err);
    }
});

router.post('/likeLocation', async function (req, res) {
    const body = req.body;
    try {
        const user = await userFacade.findByUsername(body.user);
        const location = await blogFacade.findLocationByInfo(body.info);

        const like = await blogFacade.likeLocationBlog(location.id, user.id);
        res.json(like);
    }
    catch (err) {
        res.send(err);
    }
})

module.exports = router;