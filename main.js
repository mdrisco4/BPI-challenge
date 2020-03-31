let array = [22, 14, 3, 4, 37, 6, 7, 81, 9, 10]

const url = "http://bpbuild.com/devtest/data.php"

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
          });

function randomize(newArray) {
    var chgArray = newArray.length, temp, index;
    while (chgArray > 0) {
        index = Math.floor(Math.random() * chgArray);
        chgArray--;
        temp = newArray[chgArray];
        newArray[chgArray] = newArray[index];
        newArray[index] = temp;
    }
    console.log(newArray)
    // var strArray = newArray.toString();
    // console.log(strArray)
    document.querySelector(".randomized").innerHTML = 'Randomized: ' + newArray
}

randomize(array)


function ArrayAverage() {
    var sum = array.reduce(function(a, b) {
        return a + b;
    })
    Avg = sum/array.length
    console.log(Avg)
    document.querySelector(".mean").innerHTML = 'Mean: ' + Avg
}

ArrayAverage()