import express from 'express';

const app = express();

app.get('/', () => {
  console.log('Acessou!');
});

app.listen(3333);