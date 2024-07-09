
  function allowDrop(event) {
    event.preventDefault();
  }

  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }

  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var task = document.getElementById(data);
    if (event.target.classList.contains('column')) {
      event.target.appendChild(task);
    } else if (event.target.closest('.column')) {
      event.target.closest('.column').appendChild(task);
    }
  }