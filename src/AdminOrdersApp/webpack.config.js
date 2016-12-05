/// <binding ProjectOpened='Run - Development' />

var environment = (process.env.NODE_ENV || "development").trim();

if (environment === "development") {
    module.exports = require('./webpack.dev.js');
} else {
    console.log("no production webpack");
    //module.exports = require('./webpack.prod.js');
}