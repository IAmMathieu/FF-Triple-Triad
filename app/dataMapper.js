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
  queryByElement: async (element) => {
    let query = {}
    if (element === 'null') {
      query = {
        text: 'SELECT * FROM card WHERE card.element IS NULL',
      }
    } else {
      query = {
        text: `SELECT * FROM card WHERE card.element = $1`,
        values: [element]
      }
    }
    const results = await database.query(query)
    return results.rows
  },
  queryByLevel: async (level) => {
    query = {
      text: `SELECT * FROM card WHERE card.level = $1`,
      values: [level]
    }
    const results = await database.query(query)
    return results.rows
  },
  queryByValue: async (direction, value) => {

    switch (direction) {
      case 'north':
        query = {
          text: `SELECT * FROM card WHERE value_north = $1`,
          values: [value]
        }
        break;
      case 'east':
        query = {
          text: `SELECT * FROM card WHERE value_east = $1`,
          values: [value]
        }
        break;
      case 'south':
        query = {
          text: `SELECT * FROM card WHERE value_south = $1`,
          values: [value]
        }
        break;
      case 'west':
        query = {
          text: `SELECT * FROM card WHERE value_west = $1`,
          values: [value]
        }
        break;
    }
    
    const results = await database.query(query)
    return results.rows
  },
  queryByName: async (name) => {
    query = {
      text: `SELECT * FROM card WHERE (card.name LIKE '%' || $1 || '%')`,
      values: [name]
    }
    const results = await database.query(query)
    return results.rows
  },
  
};


module.exports = dataMapper;