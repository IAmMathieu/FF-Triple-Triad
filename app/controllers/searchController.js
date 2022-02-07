const dataMapper = require('../dataMapper')
const searchController = {
  searchPage: (req, res) => {
    res.render('search');
  },
  searchByElement: async (req, res) => {
    try {
      const searchElement = req.query.element
      const cards = await dataMapper.queryByElement(searchElement);
      let title = ""
      if (searchElement === 'null') {
        title = "Liste des cartes sans élément:"
      } else {
        title = `Liste des cartes du type ${searchElement}:`
      }
      res.render('cardList', { cards, title })
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal Server Error')
    }
  },

};

module.exports = searchController;