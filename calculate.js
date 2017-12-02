const validateArguments = require('./validate-arguments');

const calculate = function() {
    const files = process.argv.slice(2);
    const validationResult = validateArguments(files);
    if(!validationResult.isValid){
        console.log(validationResult.message);
    }
    console.log(files);
};

calculate();