function popUpDisplay(name) {
  popup = `    <div id="popWraper" class="absolute w-screen h-screen flex items-center justify-center bg-black/50 top-0">
    <div id="popRemove" class="md:w-2/6 w-1/2 h-2/6 bg-slate-800 rounded-md">
      <div id="popHead" class="h-1/6 bg-red-600 text-slate-300 font-semibold text-center rounded-tr-md rounded-tl-md">
        <span class="w-full h-full flex items-center justify-center text-2xl">Suppression </span>
      </div>
      <div id="popBody"class="h-5/6 flex flex-col items-center justify-center p-2">
        <span class="text-slate-300 md:text-xl text-lg h-2/4">Êtes-vous sûr de vouloir supprimer la tâche ?</span>
        <div id="buttonDiv" class="flex flex-row h-2/6 gap-5">
          <button id="cancelRemove" onclick="removePopUp()" class="lg:w-32 w-24 bg-red-600 rounded-lg hover:bg-red-700 hover:text-slate-400 transition-all">
            <span class="text-slate-300">Annuler</span>
          </button>
          <button id="confirmRemove" onclick="removeTask('${name}')" class="lg:w-32 w-24 bg-emerald-600  rounded-lg hover:bg-emerald-700 hover:text-slate-400 transition-all">
            <span class="text-slate-300">Confirmer</span>
          </button>
        </div> 
      </div>
    </div>
  </div>
    `;
  document.body.insertAdjacentHTML('beforeend',popup)
}

function removePopUp(){
    document.body.removeChild(popWraper);
}

function removeTask(task){
    var toRemove = document.getElementById(task);
    toRemove.remove();
    removePopUp();
}
