const express = require('express');
const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.get('/', (request, response) => {
  console.log(`Hello....`);
  // const output = JSON.parse(request);
  response.send(`Ola...!`);
});
