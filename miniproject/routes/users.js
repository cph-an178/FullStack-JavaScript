var express = require('express');
var router = express.Router();
var userFacade = require('../facades/userFacade');
var loginFacade = require('../facades/loginFacade');

router.post('/login', async function (req, res) {
  const body = req.body;
  res.json(await loginFacade(body.username, body.password, body.longitude, body.latitude, body.distance));

});

router.post('/adduser', function (req, res, next) {
  const body = req.body;
  const username = body.username;
  const firstname = body.firstname;
  const lastname = body.lastname;
  const password = body.password;
  userFacade.addUser(firstname, lastname, username, password);
  const msg = 'Succes!';
  res.send(msg);
  next();
});

router.get('/findAllUsers', async function (req, res, next) {
  res.send(await userFacade.findAllUsers());
  next();
});

router.get('/findByUsername/:username', async function (req, res) {
  const username = req.params.username;
  res.send(await userFacade.findByUsername(username));
});

router.get('/findById/:id', async function (req, res) {
  const id = req.params.id;
  res.send(await userFacade.findById(id));
});

module.exports = router;