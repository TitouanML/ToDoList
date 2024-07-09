var nTask = 0;

function popUpAdd() {
  popup = `
    <div id="popWraper" class="absolute w-screen h-screen flex items-center justify-center bg-black/50 top-0">
      <div id="popRemove" class="md:w-2/6 w-1/2 h-2/6 bg-slate-800 rounded-md">
        <div id="popHead" class="h-1/6 bg-blue-600 text-slate-300 font-semibold text-center rounded-tr-md rounded-tl-md">
          <span class="w-full h-full flex items-center justify-center text-2xl">Ajout </span>
        </div>
        <div id="popBody" class="h-5/6 flex flex-col items-center justify-center p-2">
          <span class="text-slate-300 md:text-xl text-lg h-2/4">Quel est l'intitulé de la tâche ?</span>
          <div id="inputDiv" class="w-full text-center p-1">
            <input id="intitule" type="text" placeholder="Intitulé de la tâche" class="h-12 lg:w-1/2 w-2/3 rounded-md">
          </div>
          <div id="buttonDiv" class="flex flex-row h-2/6 gap-5">
            <button id="cancelRemove" onclick="removePopUp()" class="lg:w-32 w-24 bg-red-600 rounded-lg hover:bg-red-700 hover:text-slate-400 transition-all">
              <span class="text-slate-300">Annuler</span>
            </button>
            <button id="confirmRemove" onclick="createTask()" class="lg:w-32 w-24 bg-emerald-600 rounded-lg hover:bg-emerald-700 hover:text-slate-400 transition-all">
              <span class="text-slate-300">Confirmer</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", popup);
}

function appendTask(name, taskNumber) {
  const date = new Date().toLocaleDateString();
  var colonne = document.getElementById("col1");
  var task = `
              <div id="task${taskNumber}" class="task bg-slate-500 md:w-4/5 w-28  md:min-h-24 min-h-32 rounded-md shadow-lg text-slate-300 mt-2 transition-all" draggable="true" ondragstart="drag(event)">
            <div id="taskHeader" class="h-1/4 font-semibold text-center">
              <input type="text" id="editTask${taskNumber}" class="w-full bg-slate-400 hidden text-slate-700 text"/>
              <span id="taskName${taskNumber}">${name}</span>
            </div>
            <div id="dateTask${taskNumber}" class="h-2/4 text-center">${date}</div>
            <div id="hiddenAction" class="hiddenSection flex flex-row justify-between h-1/4">
              <button>
                <span id="delete${taskNumber}" class="material-symbols-outlined" onclick="popUpDisplay('task${taskNumber}')"> delete </span>
              </button>
              <button id="confirm${taskNumber}" class="hidden" onclick="finishEditTask('taskName${taskNumber}','editTask${taskNumber}','edit${taskNumber}','confirm${taskNumber}')">
                <span class="material-symbols-outlined"> check </span>
              </button>
              <button id="edit${taskNumber}" onclick="triggerEditTask('taskName${taskNumber}','editTask${taskNumber}','confirm${taskNumber}','edit${taskNumber}')">
                <span class="material-symbols-outlined"> edit </span>
              </button>
            </div>
          </div>`;
  colonne.insertAdjacentHTML("beforeend", task);
}

function createTask() {
  const valeur = document.getElementById("intitule");
  if (valeur.value.length > 0) {
    appendTask(valeur.value, nTask);
    nTask++;
    removePopUp();
  } else {
    alert("Veuillez renseigner un intitulé.");
  }
}

function removePopUp() {
  const popup = document.getElementById("popWraper");
  if (popup) {
    popup.remove();
  }
}
