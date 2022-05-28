import * as dot from "dotenv";

import { Configuration, OpenAIApi } from "openai";
dot.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req) {
  const completion = await openai.createCompletion("text-davinci-002", {
    prompt: generateSummary(req),
    temperature: 0.6,
    max_tokens: 30,    
  });

  const raw_text = completion.data.choices[0].text;
  if (raw_text.slice(0,2) == '. '){
    raw_text = raw_text.slice(2)
  }
  var last_period = 0

  for (let i = 0; i < raw_text.length; i++) {
    if (raw_text[i] == '.'){
      last_period = i;
    }    
  }

  return raw_text.slice(0, last_period + 1)
}

function generateSummary(inputText){
  return 'Summarize the following text: ' + inputText;
}