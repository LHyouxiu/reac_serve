var express = require('express');
var router = express.Router();
const navleftControllers = require('../controllers/navleft.controlles')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/navlist', navleftControllers.leftnav);
router.get('/getnavlist',navleftControllers.findnavlist)


module.exports = router;
