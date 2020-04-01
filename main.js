// ARRAY FOR PROBLEMS 1 AND 2
let array = [22, 14, 3, 4, 37, 6, 7, 81, 9, 10];

var dataTbody = document.querySelector("#data tbody")

function addDataToTbody(nl, data) {
  data.forEach((d, i) => {
    var tr = nl.insertRow(i);
    Object.keys(d).forEach((k, j) => {
      var cell = tr.insertCell(j);
      cell.innerHTML = d[k];    
    });
    nl.appendChild(tr);
  })
}

// URL FOR DATA FETCH AND FETCH ITSELF
const url = "https://bpbuild.com/devtest/data.php";

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data);


var jsData = data
console.log(jsData[0])
console.log(jsData[1])
console.log(jsData[2])
console.log(jsData[3])


}).then(data => allDataToTBody(dataTbody, data))

// function addDataToBody(nl, data) {
//   data.array.forEach(d, i) => {
//   var tr = nl.insertRow(i);    
//   Object.keys(d).forEach((k, j)) => {
//     var cell = tr.insertCell(j);
//     cell.innerHTML = d[k];
//   });

//   };
// }

allData = [
{firstname: "John", lastname: "Doe", email: "j@example.com", gender: "male"},
{firstname: "Sean", lastname: "Parker", email: "sean@example.com", gender: "male"},
{firstname: "Tony", lastname: "Stark", email: "tony@example.com", gender: "male"},
{firstname: "Sarah", lastname: "Smith", email: "sarah@example.com", gender: "female"}
]


// function addDataToTbody(nl, data) {
//   data.forEach((d, i) => {
//     var tr = nl.insertRow(i);
//     Object.keys(d).forEach((k, j) => {
//       var cell = tr.insertCell(j);
//       cell.innerHTML = d[k];    
//     });
//     nl.appendChild(tr);
//   })
// }

var dataTbody = document.querySelector("#data tbody")

addDataToTbody(dataTbody, allData)











// .then(data => drawTable(data));


// function drawTable(tbody) {
//   var tr, td;
//   tbody = allData.querySelector('tbody');
//   // loop through data source
//   for (var i = 0; i < data.length; i++) {
//       tr = tbody.insertRow(tbody.rows.length);
//       td = tr.insertCell(tr.cells.length);
//       td.setAttribute("align", "center");
//       td.innerHTML = data[i].firstname;
//       td = tr.insertCell(tr.cells.length);
//       td.innerHTML = data[i].lastname;
//       td = tr.insertCell(tr.cells.length);
//       td.innerHTML = data[i].email;
//       td = tr.insertCell(tr.cells.length);
//       td.innerHTML = data[i].gender;
//       td = tr.insertCell(tr.cells.length);
//       td.setAttribute("align", "center");

//   }
// }
// drawTable("allData");





// function renderData(data) {
//   for (const i of data) {
//     const dataContainer = document.querySelector()
//   }
// }








    // function generateTableHead(table, data) {
    //   let thead = table.createTHead();
    //   let row = thead.insertRow();
    //   for (let key of data) {
    //     let th = document.createElement("th");
    //     let text = document.createTextNode(key);
    //     th.appendChild(text);
    //     row.appendChild(th);
    //   }
    // }
    
    // let table = document.querySelector("table");
    // // let data = Object.keys(mountains[0]);
    // generateTableHead(table, data);












  










// for (let key in data) {
//   console.log("KEY: " + key);
//   console.log("VALUE: " + data[key]);
// }

 
    // document.querySelectorAll(".grid-item")[4].innerHTML = data[0].firstname
    // document.querySelectorAll(".grid-item")[8].innerHTML = data[1].firstname
    // document.querySelectorAll(".grid-item")[12].innerHTML = data[2].firstname
    // document.querySelectorAll(".grid-item")[16].innerHTML = data[3].firstname
    // document.querySelectorAll(".grid-item")[5].innerHTML = data[0].lastname
    // document.querySelectorAll(".grid-item")[9].innerHTML = data[1].lastname
    // document.querySelectorAll(".grid-item")[13].innerHTML = data[2].lastname
    // document.querySelectorAll(".grid-item")[17].innerHTML = data[3].lastname
    // document.querySelectorAll(".grid-item")[6].innerHTML = data[0].email
    // document.querySelectorAll(".grid-item")[10].innerHTML = data[1].email
    // document.querySelectorAll(".grid-item")[14].innerHTML = data[2].email
    // document.querySelectorAll(".grid-item")[18].innerHTML = data[3].email
    // document.querySelectorAll(".grid-item")[7].innerHTML = data[0].gender
    // document.querySelectorAll(".grid-item")[11].innerHTML = data[1].gender
    // document.querySelectorAll(".grid-item")[15].innerHTML = data[2].gender
    // document.querySelectorAll(".grid-item")[19].innerHTML = data[3].gender
    
    
    
    // data.forEach(element => {
    //   console.log(element.firstname)
    // });
    // // console.log(fname)
    // data.forEach(element => {
    //   console.log(element.lastname)
    // });
    // data.forEach(element => {
    //   console.log(element.email)
    // });
    // data.forEach(element => {
    //   console.log(element.gender)
    // });



    //   var data = data
    // var col = [];
    //     for (var i = 0; i < data.length; i++) {
    //         for (var key in data[i]) {
    //             if (col.indexOf(key) === -1) {
    //                 col.push(key);
    //             }
    //         }
    //     }

    //     var table = document.createElement("table");
        
    //     var tr = table.insertRow(-1);  

    //     var th = document.createElement("th");

    //     th.innerHTML = col[i];
    //         tr.appendChild(th);

    //         for (var i = 0; i < data.length; i++) {

    //           tr = data.insertRow(-1);
  
    //           for (var j = 0; j < col.length; j++) {
    //               var tabCell = tr.insertCell(-1);
    //               tabCell.innerHTML = data[i][col[j]];
    //           }
    //       }

    //       var divContainer = document.getElementById("showData");
    //       divContainer.innerHTML = "";
    //       divContainer.appendChild(table);
    //   }

 




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
