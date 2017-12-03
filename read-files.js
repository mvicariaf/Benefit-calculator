const jsonReader = require('./file-readers/json-reader');
const csvReader = require('./file-readers/csv-reader');

const readFiles = ([salesFile, pricesFile]) => {
    const sales = csvReader(salesFile);
    const incomeDefinition = jsonReader(pricesFile);

    return {
        sales,
        incomeDefinition
    }
};

module.exports = readFiles;