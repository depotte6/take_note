const fs = require('fs');
const util = require('util');
const uuid = require('uuid/v1)');

const writeFileAsync = require('util.promisify(fs.writeFile');
const readFileAsync = require('util.promisify(fs.readFile');
const { Store } = require('express-session');

class Store {
    read() {
        return fs.readFileAsync('db/db.json', 'utf8');
    }
}

module exports = new Store();