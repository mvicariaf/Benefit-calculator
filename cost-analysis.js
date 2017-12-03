const {moneyToNumber, spanishThousands} = require('./local-magnitudes-parser');

const calculateCostsPerCategory = (sales) => {
    sales.map(({CATEGORY, COST, QUANTITY}) => {
        let totalCost = spanishThousands(QUANTITY) * moneyToNumber(COST);
        console.log(totalCost);
    });
};

module.exports = calculateCostsPerCategory;