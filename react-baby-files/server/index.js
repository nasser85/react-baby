const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const publicPath = path.join(__dirname + '/../public');
app.use('/', express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(publicPath);
});

app.listen(8080, () => {
    console.log(chalk.red('Server is running on 8080!'));
})