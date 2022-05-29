const express = require('express')
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 9000;

var fs = require('fs');

app.use(express.json());
app.use(cors());



app.set('port', 9000);
const server = app.listen(app.get('port'), () => {
  console.log(`Server is running on port ${server.address().port}`);
});

app.get('/audioToText', async (req, res) => {
  res.send('routes/audioToText')
  // try {
  //   const response = await axios.post('https://api.assemblyai.com/v2/realtime/token', // use account token to get a temp user token
  //     { expires_in: 3600 }, // can set a TTL timer in seconds.
  //     { headers: { authorization: 'a93a385029994d6492893423a56fe87b' } }); // AssemblyAI API Key goes here
  //   const { data } = response;
  //   res.json(data);
  // } catch (error) {
  //   const {response: {status, data}} = error;
  //   res.status(status).json(data);
  // }
});

app.get('/summarize', async (req, res) => {
  res.send('/routes/summary')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
