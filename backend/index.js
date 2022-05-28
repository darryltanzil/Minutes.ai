import { createRequire } from "module";
import Summary from "./summary.js";
const require = createRequire(import.meta.url);

const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
  const new_text = Summary('Bob likes apples. Bob also likes bananas. He walks to the fruit market every morning to buy bananas.')

new_text.then(response =>{
  console.log(response)
})
});