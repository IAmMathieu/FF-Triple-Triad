const dataMapper = require('../dataMapper.js');

const mainController = {
  homePage: async (req, res) => {
    try {
      const cards = await dataMapper.getAllCards(); 
      res.render('cardList', {
        cards: cards,
        title: 'Liste des cartes'
      })
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal Server Error')
    }
  },
  cardPage: async (req, res) => {
    try {
      const cardId = req.params.id;
      const cards = await dataMapper.getCard(cardId);
      res.render('cardDetails', {
        card: cards,
        title: 'Détail de la carte'
      })
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal Server Error')
    }
  }
};

module.exports = mainController;