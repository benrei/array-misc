"use strict";

function shift(array, old_index, new_index) {
  if (new_index >= array.length) {
    var k = new_index - array.length + 1;
    while (k--) {
      array.push(undefined);
    }
  }
  array.splice(new_index, 0, array.splice(old_index, 1)[0]);
}

function down(array, index) {
  if (array && index >= 0 && index < array.length - 1) shift(array, index, index + 1);
}

function up(array, index) {
  if (array && index > 0) shift(array, index, index - 1);
}


function findCommonValues(arr, otherArr, sort = false) {
  var ret = [];
  for(var i in arr) {
    if(otherArr.indexOf(arr[i]) > -1){
      ret.push(arr[i]);
    }
  }
  if(sort) return ret.sort();
  return ret;
}

function findNotCommonValues(arr, otherArr, sort = false) {
  var ret = [];
  for(var i in arr) {
    if(otherArr.indexOf(arr[i]) === -1){
      ret.push(arr[i]);
    }
  }
  for(var i in otherArr) {
    if(arr.indexOf(otherArr[i]) === -1){
      ret.push(otherArr[i]);
    }
  }
  if(sort) return ret.sort();
  return ret;
}

function findArrValuesNotFoundInOtherArr(arr, otherArr, sort = false) {
  var ret = [];
  for(var j in arr) {
    if(otherArr.indexOf(arr[j]) === -1){
      if(arr[j]) ret.push(arr[j]);
    }
  }
  if(sort) return ret.sort();
  return ret;
}

function groupBy(arr, property) {
  return arr.reduce(function(memo, x) {
    if (!memo[x[property]]) { memo[x[property]] = []; }
    memo[x[property]].push(x);
    return memo;
  }, {});
}

module.exports.groupBy = groupBy;
module.exports.shift = shift;
module.exports.down = down;
module.exports.up = up;
module.exports.findCommonValues = findCommonValues;
module.exports.findNotCommonValues = findNotCommonValues;
module.exports.findArrValuesNotFoundInOtherArr = findArrValuesNotFoundInOtherArr;