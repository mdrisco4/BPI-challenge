let array = [22, 14, 3, 4, 37, 6, 7, 81, 9, 10]

const url = "http://bpbuild.com/devtest/data.php"

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
          });

// for (let i = 0; i < array.length; i++) {
//     let start = 0
//     start = start += array[i]
//     console.log(start)
// }


function ArrayAverage() {
    var sum = array.reduce(function(a, b) {
        return a + b;
    })
    Avg = sum/array.length
    console.log(Avg)
    document.querySelector(".mean").innerHTML = 'Mean: ' + Avg
}

ArrayAverage()