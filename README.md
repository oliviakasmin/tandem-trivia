# Tandem Trivia

## Overview

Welcome to my trivia code challenge! I hope you have fun and level-up your skills before your next big trivia night :)

## Installation

### 1. Clone or download this repository.

```
git clone https://github.com/oliviakasmin/tandem-trivia.git
cd tandem-trivia
```

### 2. Install the dependencies.

#### in root directory

- `npm install`

#### cd client

- `npm install`

### 3. Set up MongoDb locally.

- in the `config.js` file, enter your personal Mongo credentials (you'll need to copy in your own `username`, `password`, and `mongo URI` which can all be found from your cloud account)
- import the data file `Apprentice_TandemFor400_Data.json` saved in `server` into your mongo database in a collection called `trivias`

### 4. Start the project (you will need two terminals running simultaneously).

#### in root directory

- `npm start`
- this will start the server on port 3001 - you can access the data here: `http://localhost:3001/triviadata`

#### in another terminal, cd client

- `npm start`
- this will start the client side on port 3000 - you can interact with the app here: `http://localhost:3000/`

This project was created by Olivia Kasmin
https://www.linkedin.com/in/olivia-kasmin/
