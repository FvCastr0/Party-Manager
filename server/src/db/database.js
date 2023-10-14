const moongose = require('mongoose');
require('dotenv').config();

class Database {
  async connectionDB() {
    try {
      moongose.set('strictQuery', true);
      await moongose.connect(process.env.CONNECTION_URL);
      console.log('Conectado ao banco de dados!');
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = Database;
