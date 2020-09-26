var router = require('express').Router();
var controller = require('./../controllers/experiencesCtrl');

router.get('/', controller.all);
router.get('/top5', controller.top5);
router.get('/detail/:id', controller.detail);

module.exports = router;