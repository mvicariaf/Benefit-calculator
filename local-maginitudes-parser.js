const DECIMAL_SEPARATOR = ".";

const convertToFloat = (stringDecimal) => {
    return parseFloat(stringDecimal.replace(/[,]+/g,"."))
};

const spanishThousands = (stringDecimal) => {
    return parseFloat(stringDecimal.replace(/[.]+/g,""))
};

const getThousandsMultiplier = (thousandsSplit, index) => {
    let thousandsMultiplier = thousandsSplit.length - (index + 1);
    let result = 1;
    for(let times = 0; times < thousandsMultiplier; times++){
        result = result * 1000;
    }
    return result;
};

const moneyToNumber = (money) => {
    const withoutCurrency = money.replace(/[€]+/g,"");
    const thousandsSplit = withoutCurrency.split(DECIMAL_SEPARATOR);
    return thousandsSplit.reduce((finalNumber, decimal, index) => {
        let thousandsMultiplier = getThousandsMultiplier(thousandsSplit, index);
        return finalNumber + convertToFloat(decimal) * thousandsMultiplier;
    }, 0);
};

module.exports = {
    moneyToNumber,
    spanishThousands
};