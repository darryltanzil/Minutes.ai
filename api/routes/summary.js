require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});


const openai = new OpenAIApi(configuration);

module.exports ={
  exportSummary: async function(req) {
    const completion = await openai.createCompletion("text-davinci-002", {
      prompt: generateSummary(req),
      temperature: 0.6,
    });
    return completion.data.choices[0].text;
  }
}


function generateSummary(inputText){
  return 'Summarize the following text: ' + inputText;
}