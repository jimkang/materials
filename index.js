var jsonfile = require('jsonfile');

module.exports = jsonfile.readFileSync(__dirname + '/data/materials.json');
