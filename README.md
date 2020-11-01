# Tandem Trivia

## Overview

Welcome to my trivia code challenge! I hope you have fun and level-up your skills before your next big trivia night :)

## Installation

_note: to run this app on your code editor, you'll need Javascript, Node.js, and MongoDb installed (more database info below)_

### 1. Clone or download this repository.

```
git clone https://github.com/oliviakasmin/tandem-trivia.git
cd tandem-trivia
```

### 2. Install the dependencies.

#### in root directory

`npm install`

#### cd client

`npm install`

### 3. Set up MongoDb locally.

- in the `config.js` file, enter your personal MongoDb credentials (you'll need to copy in your own `username`, `password`, and `mongo URI` which can all be found from your cloud account)
- import the data file `Apprentice_TandemFor400_Data.json` saved in `/server` into your mongo database in a collection called `trivias`

### 4. Start the project (you will need two terminals running simultaneously).

#### in root directory

`npm start`
this will start the server on port 3001 - you can access the data here: `http://localhost:3001/triviadata`

#### in another terminal, cd client

`npm start`
this will start the client side on port 3000 - you can interact with the app here: `http://localhost:3000/`

### play the game!

_note: if you refresh the page this will generate a new game_

### future features and improvements

I'd love to add a GraphQL mutation to add data so that users may contribute new questions. The built out back-end is not entirely necessary for the current scope of app, but it was a lot of fun to build and now there is a framework in place should the app evolve and become more expansive. The logic on the front-end is already equipped to handle additional questions and subsequent trivia rounds.

Unit tests to check features, such as: 10 unique questions per round, questions and answers are shuffled, inputted data has required fields, only 1 answer can be selected, score counted accurately, etc.

A more fleshed out UX/UI! As a start, I aimed for simple and navigable.

A script to seed the database.

Deploy the site.

##### This project was created by Olivia Kasmin

https://www.oliviakasmin.com/
