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

`npm run double-install`

### 3. Set up MongoDb locally.

- in the `config.js` file, enter your personal MongoDb credentials (you'll need to copy in your own `username`, `password`, and `mongo URI` which can all be found from your cloud account)
- import the data file `Apprentice_TandemFor400_Data.json` saved in `/server` into your mongo database in a collection called `trivias`

### 4. Start the project (you will need two terminals running simultaneously).

#### in root directory

`npm start`
this will start the server on port 3001

#### in another terminal, cd client

`npm start`
this will start the frontend on port 3000: `http://localhost:3000/`

### play the game!

_note: if you refresh the page this will generate a new game_

### future features and improvements

A more fleshed out UX/UI! As a start, I aimed for simple and navigable.

A script to seed the database and add more questions.

