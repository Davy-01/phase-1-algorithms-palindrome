function isPalindrome(word) {

function reverseString(word) {
  return word;
}

function isPalindrome(word) {
  const reversedWord = reverseString(word);

  if (reversedWord===word) {
    return true;
  } else {
    return false;
  }
}
function isPalindrome(word) {
  for (let start= 0; start < word.length / 2; start++) {
    const end = word.length - 1 - start;
    if (word[start] !== word[end]) {
      return false;
    }
  }

  return true;
}}
