let array = [22, 14, 3, 4, 37, 6, 7, 81, 9, 10]

const url = "http://bpbuild.com/devtest/data.php"

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
          });
