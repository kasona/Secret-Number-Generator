'use strict';

module.exports = function() {
  var generatedNum = (Math.random() * 1000000);
  return function () {
  return generatedNum;
};
};