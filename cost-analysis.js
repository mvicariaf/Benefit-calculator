const {moneyToNumber, spanishThousands} = require('./local-magnitudes-parser');

const groupByCategory = (costs) => {
    const categoryMap = costs.reduce((sum, item) => {
            const groupByCategory = item.category;
            groupedItems = sum.get(groupByCategory) || [];
            groupedItems.push(item);
            return sum.set(groupByCategory, groupedItems);
        },
        new Map()
    );

    let result = [];
    categoryMap.forEach((value, key, map) => {
        result.push({
            category: key,
            total: value.reduce((sum, product) => sum + product.totalCost, 0)
        });
    });
    return result;
};

const calculateCostsPerCategory = (sales) => {
    var result = sales
        .map(({CATEGORY, COST, QUANTITY}) => {
            return {
                category: CATEGORY,
                totalCost: spanishThousands(QUANTITY) * moneyToNumber(COST)
            }
        });

    return groupByCategory(result);
};

module.exports = calculateCostsPerCategory;