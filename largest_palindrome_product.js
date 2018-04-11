/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function (digits) {
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  // do your work here
  for (let i = Math.pow(10, digits - 1); i < Math.pow(10, digits); i++) {
    for (let j = Math.pow(10, digits - 1); j < Math.pow(10, digits); j++) {
      facProduct = i * j;
      facStr = facProduct.toString();
      facArr = facStr.split('');
      revStr = facArr.reverse().join('');
      if (parseFloat(facStr) > palindromeNumber && revStr === facStr) {
        palindromeNumber = parseFloat(facStr);
        factor_1 = i;
        factor_0 = j;
        // console.log(factor_0);
        // console.log(factor_1);
      }
    }
  }
  return {
    factor_0: factor_0,
    factor_1: factor_1,
    palindromeNumber: palindromeNumber
  };
};