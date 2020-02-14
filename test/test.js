/* https://github.com/peterthoeny/parse-csv-js, MIT License */

// CSV data tests
let test = [
    'Item,Status,Comment',
    'Server A,"green",-',
    'Server B,red,""',
    '"Server ""C""",green,cell with quoted text',
    'Server D,"green",-',
    '"Server\nE",green,cell with newline',
    '"Server "":""\n""F""",green,cell with newlines and quotes at newlines',
    'Server G,grieen,-',
    '"Server H, I",green,cell with comma',
    'Server J,green,-'
];

const ParseCsv = require( "../parse-csv.js" );

var grid = ParseCsv.parseCsv(test.join('\n'));

console.log('resulting grid: ' + JSON.stringify(grid, null, '  '));

// EOF

