var fs = require('fs');

const jsonReader = (file) => {
    const json = JSON.parse(fs.readFileSync(file, 'utf8'));
    return json;
};

module.exports = jsonReader;