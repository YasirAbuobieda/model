const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnOpenModel = document.querySelectorAll('.show-modal');

// open function
function openModel() {
  modal.classList.remove('hidden');
  overLay.classList.remove('hidden');
}
// close function

function closeMode() {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
}

for (let i = 0; i < btnOpenModel.length; i++) {
  // open modl
  btnOpenModel[i].addEventListener('click', openModel);

  // close modl
  btnCloseModel.addEventListener('click', closeMode);
  overLay.addEventListener('click', closeMode);
// close using esc
document.addEventListener("keydown", function (eo) {

if (eo.key == "Escape" && !modal.classList.contains("hidden")) {
  closeMode()
}

  
})

}
