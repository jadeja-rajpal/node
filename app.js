const express = require('express');
const app = express();
var port = process.env.PORT || 3000;

appp.get('/', (req, res) => 
  res.send('Hello World cchvccv!')
);

app.listen(port, () => 
  console.log(`Example app listening ' + port `)
);
