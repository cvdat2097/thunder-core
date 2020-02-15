import express from 'express';

const app = express();

console.log('Running in', process.env.NODE_ENV);

app.use('/', (req, res) => {
  res.send('Hi, Im thunder-core!');
  const x = 3;
  switch (x) {
    case 3:
      return 2;
  }
});

app.listen(3000);
