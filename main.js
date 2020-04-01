// ARRAY FOR PROBLEMS 1 AND 2
let array = [22, 14, 3, 4, 37, 6, 7, 81, 9, 10];



// URL FOR DATA FETCH AND FETCH ITSELF
const url = "http://bpbuild.com/devtest/data.php";

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    document.querySelectorAll(".grid-item")[4].innerHTML = data[0].firstname
    document.querySelectorAll(".grid-item")[8].innerHTML = data[1].firstname
    document.querySelectorAll(".grid-item")[12].innerHTML = data[2].firstname
    document.querySelectorAll(".grid-item")[16].innerHTML = data[3].firstname
    document.querySelectorAll(".grid-item")[5].innerHTML = data[0].lastname
    document.querySelectorAll(".grid-item")[9].innerHTML = data[1].lastname
    document.querySelectorAll(".grid-item")[13].innerHTML = data[2].lastname
    document.querySelectorAll(".grid-item")[17].innerHTML = data[3].lastname
    document.querySelectorAll(".grid-item")[6].innerHTML = data[0].email
    document.querySelectorAll(".grid-item")[10].innerHTML = data[1].email
    document.querySelectorAll(".grid-item")[14].innerHTML = data[2].email
    document.querySelectorAll(".grid-item")[18].innerHTML = data[3].email
    document.querySelectorAll(".grid-item")[7].innerHTML = data[0].gender
    document.querySelectorAll(".grid-item")[11].innerHTML = data[1].gender
    document.querySelectorAll(".grid-item")[15].innerHTML = data[2].gender
    document.querySelectorAll(".grid-item")[19].innerHTML = data[3].gender
    data.forEach(element => {
      console.log(element.firstname)
    });
    data.forEach(element => {
      console.log(element.lastname)
    });
    data.forEach(element => {
      console.log(element.email)
    });
    data.forEach(element => {
      console.log(element.gender)
    });
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
newWords.push("&#128512;")
newSentence = newWords.join(" ");
document.querySelector(".smileys").innerHTML = newSentence;



// TRYING A SHORTER APPROACH ON THE BONUS
// console.log(words)
// const lastVowel = s => (s.match(/[aeiou]/ig) || "").slice(-1);
// words.forEach(e => console.log(`"${e}" => "${lastVowel(e)}"`));
