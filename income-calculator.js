const isPercentageProfit = (stringProfit) => {
 return stringProfit.indexOf("%") !== -1;
};

const parseFormula = (formula) => {
    let percentageTerm, absoluteTerm;
    const formulaParts = formula.split(/([-+])/g).filter(entry => entry.trim() !== '');
    for(let partsIndex = 0; partsIndex < formulaParts.length; partsIndex++){
        let part = formulaParts[partsIndex];
        if(part !== '-' && part !== '+'){
            if(isPercentageProfit(part)){
                let unSignedProfitPercentage = (100 + Number(part.replace('%',""))) / 100;
                let profitPercentage = formulaParts[partsIndex - 1] === '-' ? -unSignedProfitPercentage : +unSignedProfitPercentage;
                percentageTerm = (amount) => profitPercentage * amount;
            }
            else{
                let unSignedAbsoluteProfit = Number(part.replace('€',""));
                let absoluteProfit = formulaParts[partsIndex - 1] === '-' ? -unSignedAbsoluteProfit : +unSignedAbsoluteProfit;
                absoluteTerm = (amount) => amount + absoluteProfit;
            }
        }
    }
    return (amount) => amount
        + absoluteTerm ? absoluteTerm(amount) : 0
        + percentageTerm ? percentageTerm(amount) : 0;
};

const parseIncomeFormulas = (incomesDefinition) => {
    return Object.keys(incomesDefinition.categories).map((category) => {
        const incomeDefinition = incomesDefinition.categories[category];
        return {
            category: category,
            apply: parseFormula(incomeDefinition)
        };
    });
};

const calculateIncomePerCategory = (incomeDefinitions, costsPerCategory) => {
    const incomeFormulas = parseIncomeFormulas(incomeDefinitions);
    const defaultIncomeFormula = incomeFormulas.find((formula) => formula.category === '*');
    return costsPerCategory.map(({category, total}) => {
        const specificIncomeFormula = incomeFormulas.find((formula) => {
            return formula.category === category && formula.category !== '*';
        });

        let incomeFormula = specificIncomeFormula ? specificIncomeFormula : defaultIncomeFormula;
        return {
          category: category,
          income: incomeFormula.apply(total).toFixed(2)
        };
    });
};

module.exports = calculateIncomePerCategory;