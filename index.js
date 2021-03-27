const serverless = require('serverless-http')
const bodyParser = require('body-parser')
const express = require('express')
const fs = require('fs')
const app = express()
'use strict';

const path = 'digimon.json';

app.use(bodyParser.json({strict:false}))

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/read', function (req, res) {

    fs.readFile(path, (err, data) => {
        if (err) throw err;
       res.send(JSON.parse(data))
    })
})

app.get('/download', function (req, res) {
    res.download(path);
})

module.exports.handler = serverless(app);
