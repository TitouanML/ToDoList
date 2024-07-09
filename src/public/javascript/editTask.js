function triggerEditTask(name, input, validation, edit) {
  var nextStep = document.getElementById(validation);
  var actualStep = document.getElementById(edit);
  var actualName = document.getElementById(name);
  var editName = document.getElementById(input);
  editName.value = actualName.innerHTML;
  actualName.style.display = "none";
  editName.style.display = "block";

  actualStep.style.display = "none";
  nextStep.style.display ="block";
}

function finishEditTask(name, input, edit, validation) {
  var actualStep = document.getElementById(validation);
  var nextStep = document.getElementById(edit);
  var actualName = document.getElementById(name);
  var editName = document.getElementById(input);
  actualName.innerHTML = editName.value;
  actualName.style.display = "block";
  editName.style.display = "none";

  actualStep.style.display = "none";
  nextStep.style.display ="block";
}
