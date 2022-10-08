let button = document.getElementById("form-submit");

button.addEventListener("click", () => {
  let table = document.getElementById("main-table");
  let first = document.getElementById("first");
  let last = document.getElementById("last");
  let email = document.getElementById("email");
  let alertBox = document.getElementById("alert-box");
  alertBox.innerHTML = "";
  if (first.value || last.value || email.value) {
    let newRow = `<tr><td>${first.value}</td><td>${last.value}</td><td>${email.value}</td></tr>`;
    table.innerHTML += newRow;
    alertBox.innerHTML = '<div class="alert alert-success" role="alert">Success!</div>';

    first.value = "";
    last.value = "";
    email.value = "";
  } else {
    alertBox.innerHTML = '<div class="alert alert-danger" role="alert">Please enter some data</div>';
  }
});
