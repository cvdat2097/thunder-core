import express from 'express';

const app = express();

console.log('Running in', process.env.NODE_ENV);

app.use('/', (req, res) => {
  res.send(`Hi, I'm thunder-core!`);
});

app.listen(3000);
