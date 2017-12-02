const jsonReader = require('./file-readers/json-reader');

const readFiles = ([salesFile, pricesFile]) => {
    const pricesPerCategory = jsonReader(pricesFile);

    return {
        sales: {},
        prices: pricesPerCategory
    }
};

module.exports = readFiles;