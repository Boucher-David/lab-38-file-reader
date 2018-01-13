// don't change this file. everything works fine.
require('dotenv').config();

require('./server/server.js').start(process.env.PORT || 3000);