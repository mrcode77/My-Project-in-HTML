function fetchData() {
  document.getElementById("data").innerHTML = "Loading...";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      let html = "";

      data.forEach((element) => {
        html += `<div class="card"> ${element.name} </div>`;
      });

      document.getElementById("data").innerHTML = html;
    });
}
