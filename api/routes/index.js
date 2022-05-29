import { createRequire } from "module";
import Summary from "./summary.js";
const require = createRequire(import.meta.url);

const express = require('express')
const app = express();
const port = 9000;

let stream = "Hello my name is Lincoln"
let newStream = "Hello my name is Lincoln and I like frogs"
setInterval((stream, newStream) => {
  let newChunk = newStream.slice(stream.length)

  app.get('/', (req, res) => {
    res.send('Hello World!')
  });
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
    const new_text = Summary(newChunk)
  
  new_text.then(response =>{
    console.log(response) // Put the code for sending it to frontend here
  })
  });
}, 5000)