const database = require('./database');

const dataMapper = {

  getAllCards: async () => {
    const query = {
      text : `SELECT * FROM "card"`
    };
    const results = await database.query(query);
    return results.rows;
  },
  getCard: async (cardId) => {
    const query = {
      text: `SELECT * FROM card WHERE card.id = ${cardId}`
    }
    const result = await database.query(query)
    return result.rows[0]
  },
  
};


module.exports = dataMapper;