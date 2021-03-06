
module.exports = { isEmail, isEmpty, isStirng, isNumber }

/**
 * @desc Checks for valid email
 * @param {*} value // Accepts string
 */
function isEmail(value) {

    var myRegEx =
      // eslint-disable-next-line max-len
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var isValid = myRegEx.test(value);
    return isValid ? true : false;
}
  
/**
 * @desc Checks for Empty string
 * @param {*} value // Accepts string, object
 */
function isEmpty(value) {
    if (
      value === undefined ||
      value === null ||
      (typeof value === 'object' && Object.keys(value).length === 0) ||
      (typeof value === 'string' && value.trim().length === 0)
    ) {
      return true;
    } else {
      return false;
    }
}

/**
 * @desc Check if given value is string
 * @param {*} value // Accepts string
 */
 export function isStirng(value) {
    var myRegEx = /^[a-zA-Z\s]*$/;
    var isValid = myRegEx.test(value);
    return isValid ? true : false;
  }
  
  /**
   * @desc Checks if given value is Number
   * @param {*} value // Accepts string
   */
  export function isNumber(value) {
    var myRegEx = /^(\s*[0-9]+\s*)+$/;
    var isValid = myRegEx.test(value);
    return isValid ? true : false;
  }
  