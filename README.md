# Minutes.ai

## What it does

For To Hacks 2022, we've engineered an app which allows users to forego the typical administration required when holding meetings. Minutes.ai takes in audio held in meetings, transcribes it, intelligently separates it into bite size chunks of ideas, and then summarizes it into point form, all in Realtime. Through Artificial intelligene, this allows the person assigned the task of writing notes to have a template in which they can work from, so all the members can focus on what really matters- the content of the meeting.

## How we built it
1. We first utilized **Assembly API's** powerful audio to text transcribing features, using **Node.js,** web sockets, **Axios**, and **ExpressJS** to connect to their services and receive Realtime audio data.
2. We then separated the transcribed audio of these into bite sized chunks of "ideas", and sent them towards **OpenAI** to be parsed through by the DaVinci Engine.
3. Each bite size chunk is converted through the **DaVinci engine** to note form, allowing meeting minutes notes to be effectively summarized, and bullet point form ideas to be generated.
4. Finally, these summarized and bullet point form ideas are sent back to our app, where it is then displayed in our **React** custom-coded text editor for the meeting holders to look back on and edit.

The front-end text editor was first designed in **Figma**, using minimalist design conventions.

## Challenges we ran into
While working on this project, we ran into a series of technical issues, which we managed to overcome.
* **Initial issues with GitHub merge conflicts, code being rewritten over each other**- we overcame this through strong communication, the use of Github branches, and the installation of Github Kracken- a GUI representation of version control. We also established a git pushing and pulling naming convention (feat = feature, chore = back-end work, etc), in order to keep things neater.
* **Communication between the front end, and the back end-** we resolved this by reorganizing our file structure to include two separate folders with their distinct purposes, and communicating with them via fetch requests.
* **API communication issues**- originally, we had many issues with getting Assembly AI and Open AI to send data to and from each other. After staying up until 4am to resolve these issues, we finally got it to work!

## Accomplishments that we're proud of
We're excited that we were able to persevere through all the bugs and glitches to produce a product we are truly proud to present. We wish that the work we did now will prevent much more work for anyone looking to hold meetings in the future, and that this product will be useful in both academic settings, and professional settings.

## What we learned
* API GET requests
* Working with JS promises via Axios
* Power naps help a lot

## What's next for Minutes.ai
* Developed exporting options for Google Docs, Word, etc.
* Allow Markdown options for our built in text-editor
* Incorporate a login system, so permanent data can be stored
* Host our app on a website- we considered utilizing Google Firebase in order to do so, but realized it couldn't instantiate a back-end.

## Tech Stack
* React
* Node.js
* Axios (HTTP promise requests)
* AssemblyAI API
* Open AI (DaVinci Engine)
* ES6 JS
* Express JS
* JSX
* CSS
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> </p>
