const dataMapper = require('../dataMapper.js');

function deckCheck(req) {
    if(!req.session.deck) {
        req.session.deck = []
    }
}

const deckBuilderController = {
    deckPage: async (req, res) => {
        deckCheck(req);

        try {
            let deck = []

            for (let id of req.session.deck) {
                const card = await dataMapper.getCard(id);
                deck.push(card)
            }
            res.render('deck', { deck, title: 'Votre deck:' });
        } catch (err) {
            console.log(err);
        }
    },
    addToDeck: (req, res) => {
        deckCheck(req);
        const cardId = Number(req.params.id);
        if(req.session.deck.length < 5) {
            if(!req.session.deck.find( (id) => id === cardId)) {
                req.session.deck.push(cardId);
            }
            res.redirect('/deck');
        }
    },
    removeFromDeck: (req, res) => {
        deckCheck(req);
        const cardId = Number(req.params.id);
        req.session.deck = req.session.deck.filter( (id) => id !== cardId);
        res.redirect('/deck');
    }
};

module.exports = deckBuilderController;