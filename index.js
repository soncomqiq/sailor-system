const express = require('express');
const db = require('./models');
const boatService = require('./services/boat');
const sailorService = require('./services/sailor');
const reserveService = require('./services/reserve')
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

db.sequelize.sync({ force: false }).then(() => {
    boatService(app, db);
    sailorService(app, db);
    reserveService(app, db);

    app.listen(8080, () => console.log("App Server Run At Port 8080"));
})