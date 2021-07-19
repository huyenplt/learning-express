var express = require('express')

var controller = require('../controllers/auth.controller');
const { route } = require('./user.route');

var router = express.Router();

router.get('/login', controller.login)

router.post('/login', controller.postLogin)

module.exports = router