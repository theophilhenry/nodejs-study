## JWT Authentication Tutorial
by Web Dev Simplified | source : https://www.youtube.com/watch?v=mbsmsi7l3r4

### Project Setup
```shell
~$ npm init -y # Initiate project with default setting
~$ npm install express jsonwebtoken dotenv
~$ > .env # For storing secret key

# Install a development dependencies
~$ npm install --save-dev nodemon # Automatically refresh server everytime we make changes (no manual close and restart)
~$ > server.json # Allows us to start our server using nodemon
```

Then, set an `express` server in the `server.js`.

### Setting up Authentication
Say you have a `/posts` REST API, and you want for a spesific user to have access to it using JWT.

You can import jwt in `server.js`
```javascript
const jwt = require('jsonwebtoken')
```