/* eslint-disable no-unused-vars */
function isPalindromic(string) {
  string = string.replace(' ', '')
  const reverseStr = string.split("").reverse().join("")
  return reverseStr === string

}
