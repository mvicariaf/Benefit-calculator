const validateArguments = require('./validate-arguments');
const readFiles = require('./read-files');
const calculateCostsPerCategory = require('./cost-analysis');
const calculateIncomePerCategory = require('./income-calculator');



const calculate = function() {
    const files = process.argv.slice(2);
    const validationResult = validateArguments(files);
    if(!validationResult.isValid){
        console.log(validationResult.message);
    }
    const {sales, incomeDefinition} = readFiles(files);
    const costsPerCategory = calculateCostsPerCategory(sales);
    const incomePerCategories = calculateIncomePerCategory(incomeDefinition, costsPerCategory);

    incomePerCategories.forEach(({category, income}) => {
        console.log(`${category}: ${income}`);
    })
};

calculate();