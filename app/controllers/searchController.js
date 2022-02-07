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
  searchByLevel: async (req, res) => {
    try {
      const searchLevel = Number(req.query.level)
      const cards = await dataMapper.queryByLevel(searchLevel);
      let title = `Liste des cartes de niveau ${searchLevel}:`
      res.render('cardList', { cards, title })
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal Server Error')
    }
  },
  searchByValues: async (req, res) => {
    try {
      const searchDirection = req.query.direction;
      const searchValue = Number(req.query.value);
      const cards = await dataMapper.queryByValue(searchDirection, searchValue);
      let title = `Liste des cartes dont la direction "${searchDirection}" vaut ${searchValue}:`
      res.render('cardList', { cards, title })
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal Server Error')
    }
  },
  searchByName: async (req, res) => {
    try {
      const searchName = req.query.name
      const cards = await dataMapper.queryByName(searchName);
      let title = `Liste des cartes ayant "${searchName}" dans son nom:`
      res.render('cardList', { cards, title })
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal Server Error')
    }
  }

};

module.exports = searchController;