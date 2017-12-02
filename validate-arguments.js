const areEnoughFilesProvided = (files) => {
    return files && files.length === 2;
};

const validateArguments = (files) => {
    if(!areEnoughFilesProvided(files)){
        return {
            isValid: false,
            message: "Please provide sales and prices files"
        };
    }

    if(files[0].indexOf('.csv') === -1){
        return {
            isValid: false,
            message: "For now provide sales in a csv file"
        };
    }

    if(files[1].indexOf('.json') === -1){
        return {
            isValid: false,
            message: "For now provide prices in a json file"
        };
    }

    return {
        isValid: true
    }
};

module.exports = validateArguments;