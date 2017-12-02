const jsonReader = require('./file-readers/json-reader');
const csvReader = require('./file-readers/csv-reader');

const readFiles = ([salesFile, pricesFile]) => {
    const sales = csvReader(salesFile);
    const pricesPerCategory = jsonReader(pricesFile);

    return {
        sales,
        prices: pricesPerCategory
    }
};

module.exports = readFiles;