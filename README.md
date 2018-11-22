# array-misc

[![NPM version](https://img.shields.io/npm/v/array-misc.svg)](https://www.npmjs.com/package/array-misc)

Array utils

- Shifts array element up, down or custom
- Group array by property
- Find common values in two arrays
- Find not common values in two arrays
- Find array values not found in other array


## Installation

```sh
$ npm install array-misc
```

## Usage
```js
//  Import
var arrayMisc = require('array-misc');
arrayMisc.someFuntion();
```


#### Up
```js
var arr = [1,2,3,4,5];

arrayMisc.up(arr, 4);
console.log(arr); // -> [1,2,3,5,4]
```

#### Down
```js
var arr = [1,2,3,4,5];

arrayMisc.down(arr, 0);
console.log(arr); // -> [2,1,3,4,5]
```

#### Custom
```js
var arr = [1,2,3,4,5];

arrayMisc.custom(arr, 0, 4)
console.log(arr); // -> [2,3,4,5,1]
```

#### GroupBy
```js
var arr = [
    {type:"orange", title:"First"},
    {type:"orange", title:"Second"},
    {type:"banana", title:"Third"},
    {type:"banana", title:"Fourth"}
];
var gB = groupBy(arr, 'type'); // => {orange:[...], banana:[...]}
gB.orange; // => [{"type":"orange","title":"First"},{"type":"orange","title":"Second"}]
gB.banana; // => [{"type":"banana","title":"Third"},{"type":"banana","title":"Fourth"}]
```

#### findCommonValues, findNotCommonValues, findArrValuesNotFoundInOtherArr
```js
var arrMisc = require('array-misc');

var array1 = ["arr1", "arr2","common3","arr3", "common1", "common2", "arr4", "arr5", "arr6"];
var array2 = ["arrOther1", "arrOther2","common1", "common2", "common3", "extra"];

arrMisc.findCommonValues(array1,array2);
arrMisc.findNotCommonValues(array1,array2);
arrMisc.findArrValuesNotFoundInOtherArr(array1,array2);
arrMisc.findArrValuesNotFoundInOtherArr(array2,array1);

//  Output
//  ["common1", "common2", "common3"]
//  ["arr1", "arr2", "arr3", "arr4", "arr5", "arr6", "arrOther1", "arrOther2", "extra"]
//  ["arr1", "arr2", "arr3", "arr4", "arr5", "arr6"]
//  ["arrOther1", "arrOther2", "extra"]
```



## License

  [MIT](LICENSE)