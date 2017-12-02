const fs = require('fs');

const CELL_SEPARATOR = ";";

const removeLineBreaks = (string) => {
 return string.replace(/(\r\n|\n|\r)/gm,"");
};

const readCsvHeaders = (rows) => {
    const headersRow = rows.shift();
    return removeLineBreaks(headersRow).split(CELL_SEPARATOR);
};

const csvDataRowToJson = (headers, row) => {
    const cells = removeLineBreaks(row).split(CELL_SEPARATOR);
    return headers.reduce((json, header, index) => {
        json[header] = cells[index];
        return json;
    }, {});
};

const csvReader = (file) => {
    let csvFile = fs.readFileSync(file, {encoding: 'utf-8'});
    let rows = csvFile.split("\n");

    const headers = readCsvHeaders(rows);
    return rows.map((dataRow) => csvDataRowToJson(headers, dataRow));
};

module.exports = csvReader;