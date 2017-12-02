const fs = require('fs');

const csvReader = (file) => {
    let csvFile = fs.readFileSync(file, {encoding: 'utf-8'});
    let rows = csvFile.split("\n");

    const headers = rows.shift().replace(/(\r)/gm,"").split(";");

    let json = [];
    rows.forEach(function(row){
        const jsonRow = {};
        const cells = row.replace(/(\r)/gm,"").split(";");
        for(let i = 0; i < headers.length; i++){
            jsonRow[headers[i]] = cells[i];
        }
        json.push(jsonRow);
    });
    return json;
};

module.exports = csvReader;