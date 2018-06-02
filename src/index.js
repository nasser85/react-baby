#!/usr/bin/env node
import bluebird from 'bluebird';
import path  from 'path';
import chalk from 'chalk';
const ncp = bluebird.promisify(require('ncp').ncp);
const rename = bluebird.promisify(require('fs').rename);

ncp.limit = 16;

var newProjectDir = (function () {

    if (process.argv[2]) {
        return path.resolve(process.cwd(), process.argv[2]);
    }

    return path.join(process.cwd(), 'react-baby-boilerplate');

})();

var generatorFilesPath = path.join(__dirname, '../react-baby-files');

var copyFiles = function () {
    return ncp(generatorFilesPath, newProjectDir);
};

console.log(chalk.inverse('Building your ') + chalk.black(chalk.bgCyan('React Baby')) + chalk.inverse(' boilerplate...'));
copyFiles().then(function () {
    console.log(chalk.inverse('Boilerplate generated successfully!'));
    console.log(chalk.inverse('Project directory @ ') + chalk.black(chalk.bgYellow(newProjectDir)));
});
