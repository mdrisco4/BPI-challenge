let array = [22, 14, 3, 4, 37, 6, 7, 81, 9, 10];

const url = "http://bpbuild.com/devtest/data.php";

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });

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

function ArrayAverage() {
  var sum = array.reduce(function(a, b) {
    return a + b;
  });
  Avg = sum / array.length;
  console.log(Avg);
  document.querySelector(".mean").innerHTML = "Mean: " + Avg;
}
ArrayAverage();

let stmt =
  "Use the shortest possible regular expression or replacement method using php, ruby or javascript to put a smiley face after every word that ends in a vowel in this sentence.";
let words = stmt.split(" ");
console.log(words);
console.log(words[5].length);
console.log(words[5].charAt(words[5].length - 1));
console.log(words[words.length - 1].charAt(words[words.length - 1].length - 2));

let newWords = []
for (let i = 0; i < words.length; i++) {
  if (
    words[i].charAt(words[i].length - 1) === "a" ||
    words[i].charAt(words[i].length - 1) === "e"
  ) {
      wordSmiley = words[i] + "&#128512;"
    // console.log(words[i] + "&#128512;");
    // console.log(wordSmiley)
    newWords.push(wordSmiley)
  } else {
    // console.log(words[i]);
    newWords.push(words[i])
  }
}
console.log(newWords)
newSentence = newWords.join(' ')
document.querySelector(".smileys").innerHTML = newSentence
