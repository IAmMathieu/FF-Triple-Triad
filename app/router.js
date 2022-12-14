const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');
const searchController = require('./controllers/searchController');
const deckBuilderController = require('./controllers/deckBuilderController');



router.get('/', mainController.homePage);
router.get('/card/:id', mainController.cardPage);

router.get('/search', searchController.searchPage);
router.get('/search/element', searchController.searchByElement);
router.get('/search/level', searchController.searchByLevel);
router.get('/search/values', searchController.searchByValues);
router.get('/search/name', searchController.searchByName);

router.get('/deck', deckBuilderController.deckPage);
router.get('/deck/add/:id', deckBuilderController.addToDeck);
router.get('/deck/delete/:id', deckBuilderController.removeFromDeck);



module.exports = router;