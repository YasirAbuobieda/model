const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay ');
const btnClose = document.querySelector('.close-modal');
const openmBtn = document.querySelectorAll('.show-modal');

for (let i = 0; i < openmBtn.length; i++) {
  function openModel() {
    modal.classList.remove('hidden');
    overLay.classList.remove('hidden');
  }

  function closeModer() {
    modal.classList.add('hidden');
    overLay.classList.add('hidden');
  }
  openmBtn[i].addEventListener('click', openModel);

  btnClose.addEventListener('click', closeModer);

  overLay.addEventListener('click', closeModer);

  document.addEventListener('keydown', function (eo) {
    if (eo.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModer();
    }
  });
}
