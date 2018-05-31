'use strict';

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ncp = _bluebird2.default.promisify(require('ncp').ncp);
var rename = _bluebird2.default.promisify(require('fs').rename);

ncp.limit = 16;

var newProjectDir = function () {

    if (process.argv[2]) {
        return _path2.default.resolve(process.cwd(), process.argv[2]);
    }

    return _path2.default.join(process.cwd(), 'react-baby-boilerplate');
}();

var generatorFilesPath = _path2.default.join(__dirname, '../react-baby-files');

var copyFiles = function copyFiles() {
    return ncp(generatorFilesPath, newProjectDir);
};

var renameGitignore = function renameGitignore() {
    var oldPath = _path2.default.join(newProjectDir, 'gitignore.txt');
    var newPath = _path2.default.join(newProjectDir, '.gitignore');
    return rename(oldPath, newPath);
};

console.log(_chalk2.default.inverse('Building your ') + _chalk2.default.black(_chalk2.default.bgCyan('React Baby')) + _chalk2.default.inverse(' boilerplate...'));
copyFiles().then(renameGitignore).then(function () {
    console.log(_chalk2.default.inverse('Boilerplate generated successfully!'));
    console.log(_chalk2.default.inverse('Project directory @ ') + _chalk2.default.black(_chalk2.default.bgYellow(newProjectDir)));
});