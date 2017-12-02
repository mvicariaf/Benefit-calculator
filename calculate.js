const validateArguments = require('./validate-arguments');

var run = function() {
    const args = process.argv.slice(2);
    const validationResult = validateArguments(args);
    if(!validationResult.isValid){
        console.log(validationResult.message);
    }
    console.log(args);
};
run();