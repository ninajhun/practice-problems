/* eslint-disable no-unused-vars */
function numVowels(string) {
  let counter = 0;
  const vowels= "aeiouAEIOU"

  for (let i = 0; i <= string.length - 1; i++) {
    if (vowels.includes(string[i])){
      counter++
    }
  }
  return counter;

}
