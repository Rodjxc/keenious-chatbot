# Keenious Chatbot

This repository contains a chatbot application built with React, TypeScript, and Material-UI components. The chatbot interacts with users to fetch research articles using the OpenAlex API, with additional processing provided by OpenAI's GPT model. It's been build with Vite. The rest of the page (Landing Page) has been gimmicked from Keenious's one, to enhance UX

To build it locally I used Vite and run it with

```js
cd keenious-chatbot
npm install
npm run dev
```

Remember to add the .env file with the 

```js
VITE_OPENAI_API_KEY=your-openai-api-key
```

Vite is a bit picky and it has to be named this way for the services that use it to recognize it.


It also includes a Dockerfile (that I tested and it worked locally at least)

```js
docker build -t keenious-chatbot
```
and

```js
docker run -p 3000:80 keenious-chatbot
```
and it should install all the dependencies needed

# Use of AI

I have used AI (Chat GPT) in 3 stages when building the application. First, to better understand the requirements and simplify the flow of work. Then, when it came down to create the interaction between OpenAI - Open Alex - OpenAI (who better to ask how their integration works than to themselves), and finally, to extract and componentize some the LandingPage and the prop drilling as well as polishing the props of some components


