const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overLay.classList.remove('hidden');
  });

  function clodeMode() {
    modal.classList.add('hidden');
    overLay.classList.add('hidden');
  }

  modal.addEventListener('click', clodeMode);
  overLay.addEventListener('click', clodeMode);

  document.addEventListener('keydown', function (eo) {
    if (eo.key === 'Escape' && !modal.classList.contains('hidden')) {
      clodeMode();
    }
  });
}
