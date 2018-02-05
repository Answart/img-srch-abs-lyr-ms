const express       = require('express'),
  router            = express.Router()
  mainController    = require('./controllers/main.controller'),
  eventsController  = require('./controllers/events.controller');


router.get('/',                               mainController.showHome);

router.get('/api/latest/imagesearch',         eventsController.showSearchHistory);
router.get('/api/latest/imagesearch/:term',   eventsController.showSearchHistory);

module.exports = router;
