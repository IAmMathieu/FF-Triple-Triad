const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');
const searchController = require('./controllers/searchController');
const deckBuilderController = require('./controllers/deckBuilderController');



router.get('/', mainController.homePage);
router.get('/card/:id', mainController.cardPage);

router.get('/search', searchController.searchPage);
router.get('/search/element', searchController.searchByElement);

router.get('/deck', deckBuilderController.deckPage);
router.get('/deck/add/:id', deckBuilderController.addToDeck);


module.exports = router;