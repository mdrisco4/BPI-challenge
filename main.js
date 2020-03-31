// ARRAY FOR PROBLEMS 1 AND 2
let array = [22, 14, 3, 4, 37, 6, 7, 81, 9, 10];
// URL FOR DATA FETCH AND FETCH ITSELF
const url = "http://bpbuild.com/devtest/data.php";

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });
// RANDOMIZE FUNCTION
function randomize(newArray) {
  var chgArray = newArray.length,
    temp,
    index;
  while (chgArray > 0) {
    index = Math.floor(Math.random() * chgArray);
    chgArray--;
    temp = newArray[chgArray];
    newArray[chgArray] = newArray[index];
    newArray[index] = temp;
  }
  console.log(newArray);
  document.querySelector(".randomized").innerHTML = "Randomized: " + newArray;
}
randomize(array);

document
  .querySelector(".randomize")
  .addEventListener("click", function(newArray) {
    var chgArray = newArray.length,
      temp,
      index;
    while (chgArray > 0) {
      index = Math.floor(Math.random() * chgArray);
      chgArray--;
      temp = newArray[chgArray];
      newArray[chgArray] = newArray[index];
      newArray[index] = temp;
    }
    console.log(newArray);
    document.querySelector(".randomized").innerHTML = "Randomized: " + newArray;
  });
// AVERAGE FUNCTION
function ArrayAverage() {
  var sum = array.reduce(function(a, b) {
    return a + b;
  });
  Avg = sum / array.length;
  console.log(Avg);
  document.querySelector(".mean").innerHTML = "Mean: " + Avg;
}
ArrayAverage();
// CODE FOR SMILEY FACE CHALLENGE
let stmt =
  "Use the shortest possible regular expression or replacement method using php, ruby or javascript to put a smiley face after every word that ends in a vowel in this sentence.";
let words = stmt.split(" ");
let newWords = [];
for (let i = 0; i < words.length; i++) {
  if (
    words[i].charAt(words[i].length - 1) === "a" ||
    words[i].charAt(words[i].length - 1) === "e"
  ) {
    wordSmiley = words[i] + "&#128512;";
    newWords.push(wordSmiley);
  } else {
    newWords.push(words[i]);
  }
}
newSentence = newWords.join(" ");
document.querySelector(".smileys").innerHTML = newSentence;
