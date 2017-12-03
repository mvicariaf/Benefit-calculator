const validateArguments = require('./validate-arguments');
const readFiles = require('./read-files');
const calculateCostsPerCategory = require('./cost-analysis');

const calculate = function() {
    const files = process.argv.slice(2);
    const validationResult = validateArguments(files);
    if(!validationResult.isValid){
        console.log(validationResult.message);
    }
    const {sales, prices} = readFiles(files);
    const costsPerCategory = calculateCostsPerCategory(sales);
    console.log(costsPerCategory);
};

calculate();