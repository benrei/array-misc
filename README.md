# array-misc

[![NPM version](https://img.shields.io/npm/v/array-misc.svg)](https://www.npmjs.com/package/array-misc)

Array utils

- Shifts array element up, down or custom
- Find common values in two arrays
- Find not common values in two arrays
- Find array values not found in other array


## Installation

```sh
$ npm install array-misc
```

## Usage
```js
var arrayMisc = require('array-misc');

var arr = [1,2,3,4,5];
//  up(array, index)
arrayMisc.down(arr, 0);
console.log(arr); // -> [2,1,3,4,5]

//  down(array, index)
arrayMisc.up(arr, 0);
console.log(arr); // -> [1,2,3,4,5]

//  custom(array, fromIndex, toIndex)
arrayMisc.custom(arr, 0, 4)
console.log(arr); // -> [2,3,4,5,1]



var array1 = ["arr1", "arr2","common3","arr3", "common1", "common2", "arr4", "arr5", "arr6"];
var array2 = ["arrOther1", "arrOther2","common1", "common2", "common3", "extra"];

arrayMisc.findCommonValues(array1,array2);
arrayMisc.findNotCommonValues(array1,array2);
arrayMisc.findArrValuesNotFoundInOtherArr(array1,array2);
arrayMisc.findArrValuesNotFoundInOtherArr(array2,array1);

//  Output
//  ["common1", "common2", "common3"]
//  ["arr1", "arr2", "arr3", "arr4", "arr5", "arr6", "arrOther1", "arrOther2", "extra"]
//  ["arr1", "arr2", "arr3", "arr4", "arr5", "arr6"]
//  ["arrOther1", "arrOther2", "extra"]
```


## License

  [MIT](LICENSE)