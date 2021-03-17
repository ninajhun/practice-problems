/* eslint-disable no-unused-vars */
function capitalizeWords(string){
  const strArr = string.split(' ')
  const capArr = strArr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())

  return capArr.join(' ')

}
