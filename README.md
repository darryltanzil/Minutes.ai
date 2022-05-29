# Scribe.ai

## Description

For ToHacks 2022, we've developed an app that allows users to forego the typical administration required when holding meetings. Scribe.ai takes in audio held in meetings, transcribes it, and then summarizes it in note form, all in realtime. This allows the person assigned the task of writing notes to have a template in which they can work from, so all the members can focus on what really matters- the content of the meeting. 

## Process
1. Live transcription coming in from audio
2. Cut up the live audio transcription, cut into indiviudal ideas. Take each idea string chunk, send to GPT3
4. Each idea chunk is roughly one paragraph
5. Send the string chunk, send to GPT3, and then append a hard coded command.
6. Send data to the front end, which will be sent to the text editor.


## File structure
/client/ is frontend
/api/ is the backend

## Technologies / Libraries 
* HTML, CSS, JS
* Node.js
* React
* Figma
