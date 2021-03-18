/* eslint-disable no-unused-vars */
function isAnagram(firstString, secondString) {

  const fArr = firstString.split("").sort()
  const sArr = secondString.split("").sort()

  return (fArr.join('').replaceAll(' ', '') === sArr.join('').replaceAll(' ', ''))

}


//remove spaces
//change 2nd str to array
//see if first string includes second string arr
