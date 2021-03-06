// ARRAY FOR PROBLEMS 1 AND 2
let array = [22, 14, 3, 4, 37, 6, 7, 81, 9, 10];

// RANDOMIZE FUNCTION
function randomize() {
  var chgArray = array.length,
    temp,
    index;
  while (chgArray > 0) {
    index = Math.floor(Math.random() * chgArray);
    chgArray--;
    temp = array[chgArray];
    array[chgArray] = array[index];
    array[index] = temp;
  }
  document.querySelector(".randomized").innerHTML = "Randomized: " + array;
}
randomize();

// AVERAGE FUNCTION
function ArrayAverage() {
  var sum = array.reduce(function(a, b) {
    return a + b;
  });
  Avg = sum / array.length;
  document.querySelector(".mean").innerHTML = "Mean: " + Avg;
}
ArrayAverage();

// URL FOR DATA FETCH, FETCH AND TABLE CREATING FUNCTION
var dataTbody = document.querySelector("#data tbody");

function addDataToTbody(nl, data) {
  data.forEach((d, i) => {
    var tr = nl.insertRow(i);
    Object.keys(d).forEach((k, j) => {
      var cell = tr.insertCell(j);
      cell.innerHTML = d[k];
    });
    nl.appendChild(tr);
  });
}

const url = "https://bpbuild.com/devtest/data.php";

var myStuff = fetch(url)
  .then(res => res.json())
  .then(data => {
    addDataToTbody(dataTbody, data);
  });

// CODE FOR SMILEY FACE CHALLENGE
let stmt =
  "Use the shortest possible regular expression or replacement method using php, ruby or javascript to put a smiley face after every word that ends in a vowel in this sentence.";
let words = stmt.split(" ");
let newWords = [];
for (let i = 0; i < words.length; i++) {
  if (
    words[i].charAt(words[i].length - 1) === "a" ||
    words[i].charAt(words[i].length - 1) === "e" ||
    words[i].charAt(words[i].length - 1) === "o"
  ) {
    wordSmiley = words[i] + "&#128512;";
    newWords.push(wordSmiley);
  } else {
    newWords.push(words[i]);
  }
}
newWords.push("&#128512;");
newSentence = newWords.join(" ");
document.querySelector(".smileys").innerHTML = newSentence;

// TRYING A SHORTER APPROACH ON THE BONUS

// const lastVowel = s => (s.match(/[aeiou.]$/ig) || "").slice(-1);
// words.forEach(e => console.log(`"${e}" => "${lastVowel(e)}"`));
// console.log(stmt);

// const regex = (/[aeiou]/gi)
// console.log(stmt.replace(regex, 'the'));


regex = stmt.replace(/[aeiou]\b/gi, "&#128512;");
document.querySelector(".smileys-regex").innerHTML = regex;
