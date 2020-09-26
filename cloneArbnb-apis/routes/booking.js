var router = require('express').Router();
var controller = require('./../controllers/bookingCtrl');

router.post('/makebooking', controller.booking);

module.exports = router;