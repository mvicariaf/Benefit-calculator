const validateArguments = require('./validate-arguments');
const readFiles = require('./read-files');

const calculate = function() {
    const files = process.argv.slice(2);
    const validationResult = validateArguments(files);
    if(!validationResult.isValid){
        console.log(validationResult.message);
    }
    const {sales, prices} = readFiles(files);
    console.log(files);
};

calculate();