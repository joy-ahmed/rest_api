const express = require('express');

const app = express();

const port = process.env.PORT || 4242;

app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

app.listen(port, () => console.log(`Server up and running on ${port}`));
