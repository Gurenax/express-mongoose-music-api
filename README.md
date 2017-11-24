# Express Mongoose Music API

## Setup
- yard init
- yard add express
- yarn add nodemon
- modify package.json to add scripts "nodemon --inspect src/server.js"
- add src/server.js
- add express basic boilerplate
```javascript
const express = require('express')

const server = express()

server.listen(7000, () => {
  console.log('Started at http://localhost:7000')
})
```
- yarn dev
- yarn add mongoose


## Model

### Artist
- name
