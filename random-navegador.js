const express = require('express');
const app = express();
const randomUserTrinta = require('./random-save');

randomUserTrinta(app);

app.listen(3000, ()=> console.log('tudo ok!!!'));
