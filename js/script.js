function submitForm() {
  var form = document.getElementById("form");
  var table = document.querySelector(".table tbody");
  var newRow = table.insertRow();

  newRow.insertCell(0).innerHTML = document.getElementById("first-name").value;
  newRow.insertCell(1).innerHTML = document.getElementById("last-name").value;
  newRow.insertCell(2).innerHTML = document.getElementById("email").value;
  newRow.insertCell(3).innerHTML = document.getElementById("address").value;
  newRow.insertCell(4).innerHTML = document.querySelector(
    'input[name="gender"]:checked'
  ).value;

  var foodChoices = "";
  var checkboxes = document.querySelectorAll('input[name="food"]:checked');
  for (var i = 0; i < checkboxes.length; i++) {
    foodChoices += checkboxes[i].value + ", ";
  }
  newRow.insertCell(5).innerHTML = foodChoices.slice(0, -2);

  newRow.insertCell(6).innerHTML = document.getElementById("state").value;
  newRow.insertCell(7).innerHTML = document.getElementById("country").value;

  form.reset();
}
