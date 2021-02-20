const fetch = require('node-fetch');
const url = 'https://randomuser.me/api/?results=30';

const trintaUsuariosSalvos = async (app) => {
   const response = await fetch(url);
   const data = await response.json();

   app.get('/', (req, res) => {
      const nomesCompletos = data.results.map(cada => `${cada.name.first} ${cada.name.last}`)
      const nomesli = nomesCompletos.map(cada => `<li>${cada}</li>`).reduce((acc, atual) => `${acc} ${atual}`);
      res.send(`<ol>${nomesli}</ol>`);
   });
};

module.exports = trintaUsuariosSalvos;