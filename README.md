# Minutes.ai

## Inspiration

## What it does

For To Hacks 2022, we've engineered an app which allows users to forego the typical administration required when holding meetings. Minutes.ai takes in audio held in meetings, transcribes it, intelligently separates it into bite size chunks of ideas, and then summarizes it into note form, all in Realtime. This allows the person assigned the task of writing notes to have a template in which they can work from, so all the members can focus on what really matters- the content of the meeting.

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
We are ecstatic that we were able to persevere through all the bugs and glitches to produce a product we are truly proud to present. We hope that the work we did now will prevent much more work for anyone looking to hold meetings in the future, and that this product will truly be useful to many.

## What we learned
* API GET requests
* Working with JS promises via Axios
*  Power naps help a lot

## What's next for Scribe.ai
* Developed exporting options for Google Docs, Word, etc.
* Allow Markdown options for our built in text-editor
* Incorporate a login system, so permanent data can be stored
