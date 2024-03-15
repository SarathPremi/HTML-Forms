function submitForm() {
  var form = document.getElementById("form");
  var table = document.querySelector(".table tbody");
  var newRow = table.insertRow();

newRow.insertCell(0).innerHTML = form.elements["first-name"].value;
newRow.insertCell(1).innerHTML = form.elements["last-name"].value;
newRow.insertCell(2).innerHTML = form.elements["email"].value;
newRow.insertCell(3).innerHTML = form.elements["address"].value;
newRow.insertCell(4).innerHTML = form.elements["gender"].value;

  var foodChoices = "";
  var checkboxes = document.querySelectorAll('input[name="food"]:checked');
  for (var i = 0; i < checkboxes.length; i++) {
    foodChoices += checkboxes[i].value + ", ";
  }
  newRow.insertCell(5).innerHTML = foodChoices.slice(0, -2);

  newRow.insertCell(6).innerHTML = form.elements["state"].value;
  newRow.insertCell(7).innerHTML = form.elements["country"].value;
  form.reset();
}
