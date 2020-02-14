# parseCsv (js)

## Parse CSV/TSV data
This function parses CSV (comma-separated values) or TSV (tab-separated values) data,
and returns a grid (array of arrays)

## Table of contents

- [Usage](#usage)
- [Dependencies](#dependencies)

## Usage
This function can be used in the browser, or in a Node.js environment. This example shows the latter.

```js
const ParseCsv = require( "../parse-csv.js" );

const csv = 'A1,B1,C1\n"A ""2""","B, 2","C\n2"';
const separator = ',';      // field separator, default: ','
const newline = ' <br /> '; // newline representation in case a field contains newlines, default: '\n' 
var grid = ParseCsv.parseCsv(data, separator, newline);
// expected: [ [ 'A1', 'B1', 'C1' ], [ 'A "2"', 'B, 2', 'C <br /> 2' ] ]
```

## Dependencies
None.
